import argparse
import sys
import math


def parse_args(args):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-A',
        action="store",
        dest="A",
        type=float,
        default=None,
        help='a (float): коэффициент А')
    parser.add_argument(
        '-B',
        action="store",
        dest="B",
        type=float,
        default=None,
        help='b (float): коэффициент B')
    parser.add_argument(
        '-C',
        action="store",
        dest="C",
        type=float,
        default=None,
        help='c (float): коэффициент C')
    return parser.parse_args(args)


def chek_arg(arg, str_arg):
    if arg is None:
        try:
            a = input('Введите коэффициент ' + str_arg + '\n')
            a = float(a)
        except:
            a = chek_arg(arg, str_arg)
    else:
        a = arg
    return a


def get_args(params):
    a = chek_arg(params.A, 'A')
    b = chek_arg(params.B, 'B')
    c = chek_arg(params.C, 'C')
    return (a, b, c)


def get_roots(args):
    a, b, c = args
    result = []
    D = b * b - 4 * a * c
    if D == 0.0:
        root = -b / (2.0 * a)
        result.append(root)
    elif D > 0.0:
        sqD = math.sqrt(D)
        root1 = (-b + sqD) / (2.0 * a)
        root2 = (-b - sqD) / (2.0 * a)
        result.append(root1)
        result.append(root2)
    return result


def main():
    params = parse_args(sys.argv[1:])
    args = get_args(params)

    roots = get_roots(args)

    if len(roots) == 0:
        print('Нет корней')
    elif len(roots) == 1:
        print('Один корень: {}'.format(roots[0]))
    elif len(roots) == 2:
        print('Два корня: {} и {}'.format(roots[0], roots[1]))


if __name__ == '__main__':
    main()