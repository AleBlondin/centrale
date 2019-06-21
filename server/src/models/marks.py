"""
Define the Marks model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Marks(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The User model """

    __tablename__ = "marks"

    first_name = db.Column(db.String(300), primary_key=True)
    last_name = db.Column(db.String(300), primary_key=True)
    title = db.Column(db.String(500), primary_key=True)
    director = db.Column(db.String(300),primary_key=True)
    mark = db.Column(db.Integer, nullable=True)


    def __init__(self, first_name, last_name, title, director, mark):
        """ Create a new User """
        self.first_name = first_name
        self.last_name = last_name
        self.title = title
        self.director = director
        self.mark = mark
