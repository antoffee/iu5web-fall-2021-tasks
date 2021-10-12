from lab_python_oop import geom_figure
from lab_python_oop import fig_color

class Rectangle(geom_figure.GeomFigure):
    def __init__(self, width, height, color):
        self._width = width
        self._height = height
        self._color = fig_color.FigColor(color)
        
    def square(self):
        return self._width * self._height

    def __repr__(self):
        return 'Прямоугольник с высотой ' + str(self._height) + ', шириной ' + str(self._width) + ' и цветом: ' + str(self._color._color)