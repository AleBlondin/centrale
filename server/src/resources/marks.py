"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MarksRepository
from repositories import MarksAverageRepository
from util import parse_params


class MarksResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/marks/GET.yml")
    def get(last_name, first_name, title, director):
        """ Return the mark given by the user to the movie """
        notation = MarksRepository.get(last_name=last_name, first_name=first_name,title=title, director=director)
        return jsonify({"mark": notation.json})

    @staticmethod
    @parse_params(
        Argument("mark", location="json", required=True, help="The mark given by the user to the movie."),
    )

    @swag_from("../swagger/marks/POST.yml")
    def post(last_name, first_name, title, director, mark):
        """ Create a notation of the movie by the user """
        notation = MarksRepository.create(last_name=last_name, first_name=first_name,title=title,director=director, mark=mark
        )
        return jsonify({"mark": notation.json})

    @staticmethod
    @parse_params(
        Argument("mark", location="json", required=True, help="The mark given by the user to the movie."),
    )

    @swag_from("../swagger/marks/PUT.yml")
    def put(last_name, first_name, title, director, mark):
        """ Update a notation based on the sent information """
        repository = MarksRepository()
        notation = repository.update(last_name=last_name, first_name=first_name, title=title, director=director, mark=mark)
        return jsonify({"mark": notation.json})


class MarksAverageResource(Resource):
    @staticmethod
    @swag_from("../swagger/marks/GET_AVERAGE.yml")
    def get(title, director):
        """ Return the average mark of the movie """
        average = MarksAverageRepository.get_average(title, director)
        return jsonify({"average_mark": average})
