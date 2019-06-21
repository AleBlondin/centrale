from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .user import User
from .movie import Movie
from .marks import Marks
