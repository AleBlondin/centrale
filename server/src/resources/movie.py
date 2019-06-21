"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository
from repositories import MovieALLRepository
from util import parse_params

class MovieALLResource(Resource):
    @staticmethod
    @swag_from("../swagger/movie/GET_ALL.yml")
    def get():
        """ Return the list of movies """
        movies = MovieALLRepository.get_all()
        return jsonify(movies)

class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(title,director):
        """ Return a movie key information based on his name """
        movie = MovieRepository.get(title=title, director=director)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("original_language", location="json", required=True, help="The original_language of the movie."),
        Argument("date", location="json", required=True, help="The date of the movie."),
        Argument("type", location="json", required=True, help="The type of the movie.")
    )
    @swag_from("../swagger/movie/POST.yml")
    def post(title,director, original_language,type, date):
        """ Create a movie based on the sent information """
        movie = MovieRepository.create(
            title=title,director=director, original_language=original_language,type=type, date=date
        )
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("original_language", location="json", required=True, help="The original_language of the movie."),
        Argument("date", location="json", required=True, help="The date of the movie."),
        Argument("type", location="json", required=True, help="The type of the movie.")
    )
    @swag_from("../swagger/movie/PUT.yml")
    def put(title,director, original_language,type, date):
        """ Update a movie based on the sent information """
        repository = MovieRepository()
        movie = repository.update(title=title,director=director, original_language=original_language,type=type, date=date)
        return jsonify({"movie": movie.json})
