"""
Define the User model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Movie(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Movie model """

    __tablename__ = "movie"

    title = db.Column(db.String(500), primary_key=True)
    director = db.Column(db.String(300),primary_key=True)
    original_language = db.Column(db.String(300), nullable=True)
    type = db.Column(db.String(300), nullable=True)
    date = db.Column(db.Integer, nullable=True)

    def __init__(self, title,director, original_language,type, date):
        """ Create a new Movie """
        self.title = title
        self.director = director
        self.original_language = original_language
        self.type = type
        self.date = date
