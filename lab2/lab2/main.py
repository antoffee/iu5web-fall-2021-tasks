from lab_python_oop import rectangle
from lab_python_oop import circle
from lab_python_oop import square

def main():
    rect = rectangle.Rectangle(5, 5, 'синий')
    circ = circle.Circle(5, 'зеленый')
    squar = square.Square(5, 'красный')
    print('{0!r}'.format(rect))
    print('{0!r}'.format(circ))
    print('{0!r}'.format(squar))


if __name__ == "__main__":
    main()