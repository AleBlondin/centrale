"""
Define the Movie model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Movie(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The movie model """

    __tablename__ = "movie"

    name = db.Column(db.String(300), primary_key=True)
    description = db.Column(db.String(2000))
    date = db.Column(db.Integer, nullable=True)

    def __init__(self, name, description, date=None):
        """ Create a new User """
        self.name = name
        self.description = description
        self.date = date
