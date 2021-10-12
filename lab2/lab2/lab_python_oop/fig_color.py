
class FigColor():
    def __init__(self, color):
        self._color = color
    
    @property
    def color(self):
        return self._color

    @color.setter
    def x(self, value):
        self._color = value

    