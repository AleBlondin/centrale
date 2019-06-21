""" Defines the User repository """

from models import Movie
from models import Marks

class MovieALLRepository:

    @staticmethod
    def get_all():
        movies = Movie.query.all()
        marks = Marks.query.all()
        dic={}
        for movie in movies :
            notes=[]
            for note in marks :
                if note.title == movie.title :
                    notes.append(note.mark)
            sum_notes = 0
            n = len(marks)
            for k in notes:
                    sum_notes += k
            average = sum_notes/n
            dic[movie.title]=average
        return dic


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(title, director):
        """ Query a user by last and first name """
        return Movie.query.filter_by(title=title, director=director).one()

    def update(self, title, director,original_language=None,type=None, date=None):
        """ Update a movie's type or date """
        movie = self.get(title,director)
        if original_language != None :
            movie.original_language = original_language
        if type != None :
            movie.type = type
        if date !=None :
            movie.date=date

        return movie.save()

    @staticmethod
    def create(title,director, original_language,type, date):
        """ Create a new movie """
        movie = Movie(title=title,director=director, original_language=original_language,type=type, date=date)

        return movie.save()
