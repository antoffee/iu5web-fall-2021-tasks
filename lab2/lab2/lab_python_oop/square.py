from lab_python_oop import rectangle
from lab_python_oop import fig_color

class Square(rectangle.Rectangle):
    def __init__(self, side, color):
        self._width = side
        self._height = side
        self._color = fig_color.FigColor(color)
        
    def __repr__(self):
        return 'Круг со стороной ' + str(self._width) + ' и цветом: ' + str(self._color._color)