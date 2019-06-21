"""
Defines the blueprint for the movies
"""
from flask import Blueprint
from flask_restful import Api

from resources import MarksResource
from resources import MarksAverageResource

MARKS_BLUEPRINT = Blueprint("mark", __name__)
Api(MARKS_BLUEPRINT).add_resource(
    MarksResource, "/notation/<string:last_name>/<string:first_name>/<string:title>/<string:director>"
)
Api(MARKS_BLUEPRINT).add_resource(
    MarksAverageResource, "/notation/<string:title>/<string:director>")
