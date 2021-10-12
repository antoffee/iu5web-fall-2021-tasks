import time
from contextlib import contextmanager


class Cm_timer_1:

    def __init__(self):
        self.start_time = None
        self.end_time = None
        
    def __enter__(self):
        self.start_time = time.time()
        
        # Должен возвращаться значимый объект
        # например, открытый файл
        
    def __exit__(self, exp_type, exp_value, traceback):
        self.end_time = time.time()
        print('time: {}'.format(self.end_time - self.start_time))


@contextmanager
def cm_timer_2():
    start_time = time.time()
    yield
    end_time = time.time()
    print('time: {}'.format(end_time - start_time))


if __name__ == '__main__':
    with Cm_timer_1():
        time.sleep(1.0)

    with cm_timer_2():
        time.sleep(1.0)