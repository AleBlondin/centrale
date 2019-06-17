""" Defines the User repository """

from models import Movie


class UserRepository:
    """ The repository for the user model """

    @staticmethod
    def get(name):
        """ Query a movie with his name """
        return Movie.query.filter_by(name=name).one()

    def update(self, name, description, date):
        """ Update a movie """
        movie = self.get(name)

        movie.date = date

        return movie.save()
# A reprendre à partir de là
    @staticmethod
    def create(last_name, first_name, age):
        """ Create a new user """
        user = User(last_name=last_name, first_name=first_name, age=age)

        return user.save()
