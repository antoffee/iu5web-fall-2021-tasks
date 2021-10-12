from lab_python_oop import geom_figure
from lab_python_oop import fig_color
from math import pi

class Circle(geom_figure.GeomFigure):
    def __init__(self, radius, color):
        self._radius = radius
        self._color = fig_color.FigColor(color)
        
    def square(self):
        return pi * self._radius**2

    def __repr__(self):
        return 'Круг с радиусом ' + str(self._radius) + ' и цветом: ' + str(self._color._color)