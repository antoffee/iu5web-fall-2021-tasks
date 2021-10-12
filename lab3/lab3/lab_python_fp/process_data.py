import json
import sys
import cm_timer
from print_result import print_result
from gen_random import gen_random
# Сделаем другие необходимые импорты

path = '.\data_light.json'

# Необходимо в переменную path сохранить путь к файлу, который был передан при запуске сценария

with open(path, encoding='utf8') as f:
    data = json.load(f)

# Далее необходимо реализовать все функции по заданию, заменив `raise NotImplemented`
# Предполагается, что функции f1, f2, f3 будут реализованы в одну строку
# В реализации функции f4 может быть до 3 строк


@print_result
def f1(arg):
    return sorted(set([val.lower() for val in arg]), key=str.lower)


@print_result
def f2(arg):
    return list(filter(lambda x: str.startswith(x, 'программист'), arg))


@print_result
def f3(arg):
    return list(map(lambda x: x + ' с опытом Python', arg))


@print_result
def f4(arg):
    temp = list(zip(arg, [(', зарплата '+str(el) + ' руб.') for el in list(gen_random(len(arg), 100000, 200000))]))
    return [(el[0]+el[1]) for el in temp]


if __name__ == '__main__':
    with cm_timer.Cm_timer_1():
        f4(f3(f2(f1([el['job-name'] for el in data]))))
        