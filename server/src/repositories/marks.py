""" Defines the Marks repository """

from models import Marks


class MarksRepository:
    """ The repository for the marks model """

    @staticmethod
    def get(last_name, first_name,title,director):
        """ Query a mark by first name, last name, title and director of the movie """
        return Marks.query.filter_by(last_name=last_name, first_name=first_name, title=title, director=director).one()

    def update(self, last_name, first_name, title, director, mark):
        """ Update a user's mark for a movie """
        notation = self.get(last_name, first_name, title, director)
        notation.mark = mark

        return notation.save()

    @staticmethod
    def create(last_name, first_name, title, director, mark):
        """ Create a new notation of a movie by a user """
        notation = Marks(last_name=last_name, first_name=first_name, title=title, director=director, mark=mark)

        return notation.save()


class MarksAverageRepository:

    @staticmethod
    def get_average(title,director):
        marks=Marks.query.filter(Marks.title==title).all()
        notes=[]
        for movie in marks :
            notes.append(movie.mark)
        sum_notes = 0
        n = len(marks)
        for k in notes:
                sum_notes += k
        average = sum_notes/n
        return average

