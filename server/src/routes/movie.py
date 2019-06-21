"""
Defines the blueprint for the movies
"""
from flask import Blueprint
from flask_restful import Api

from resources import MovieResource
from resources import MovieALLResource

MOVIE_BLUEPRINT = Blueprint("movie", __name__)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieResource, "/movie/<string:title>/<string:director>"
)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieALLResource, "/movies")
