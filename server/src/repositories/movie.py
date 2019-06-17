""" Defines the Movie repository """

from models import Movie


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(name):
        """ Query a movie with his name """
        return Movie.query.filter_by(name=name).one()

    def update(self, name, description, date):
        """ Update a movie """
        movie = self.get(name)

        movie.date = date
        movie.description=description

        return movie.save()

    @staticmethod
    def create(name, description, date):
        """ Create a new film """
        movie = Movie(name=name, description=description, date=date)

        return movie.save()
    
    @staticmethod
    def getAll() :
        """Send all the movies"""
        return Movie.query.all()
