"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository
from util import parse_params


class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(name):
        """ Return an user key information based on his name """
        movie = MovieRepository.get(name=name)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("date", location="json", required=True, help="The date the movie was realeased."), Argument("description", location="json", required=True, help="What the movie is about"))
    @swag_from("../swagger/movie/POST.yml")
    def post(name, description, date ):
        """ Create a movie based on the sent information """
        movie = MovieRepository.create(
            name=name, description=description, date=date
        )
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("date", location="json", required=True, help="The date the movie was realeased."), , Argument("description", location="json", required=True, help="What the movie is about"))
    @swag_from("../swagger/movie/PUT.yml")
    def put(name, description, date):
        """ Update a movie based on the sent information """
        repository = MovieRepository()
        movie = repository.update(name=name, description=description, date=date)
        return jsonify({"movie": movie.json})