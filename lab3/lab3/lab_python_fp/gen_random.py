import random


def gen_random(num_count, begin, end):
    for item in range(num_count):
        yield random.randint(begin, end)


if __name__ == '__main__':
    for i in gen_random(5, 1, 3):
        print(i)
