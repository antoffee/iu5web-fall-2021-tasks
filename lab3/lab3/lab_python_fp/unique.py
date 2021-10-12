# Итератор для удаления дубликатов
class Unique(object):
    def __init__(self, items, **kwargs):
        # Нужно реализовать конструктор
        # В качестве ключевого аргумента, конструктор должен принимать bool-параметр ignore_case,
        # в зависимости от значения которого будут считаться одинаковыми строки в разном регистре
        # Например: ignore_case = True, Aбв и АБВ - разные строки
        #           ignore_case = False, Aбв и АБВ - одинаковые строки, одна из которых удалится
        # По-умолчанию ignore_case = False
        self.used_elements = set()
        self.data = items
        self.index = 0

        if 'ignore_case' not in kwargs:
            self.ignore_case = False
        else:
            self.ignore_case = kwargs['ignore_case']

    def __iter__(self):
        return self

    def __next__(self):
        while True:
            if self.index >= len(self.data):
                raise StopIteration
            else:
                current = self.data[self.index]
                self.index = self.index + 1
                if self.ignore_case:
                    if current.lower() not in self.used_elements:
                        self.used_elements.add(current.lower())
                        return current
                else:
                    if current not in self.used_elements:
                        self.used_elements.add(current)
                        return current


data = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
for val in Unique(data):
    print(val)
print('========================================')
data = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']
for val in Unique(data, ignore_case=True):
    print(val)
print('========================================')
for val in Unique(data):
    print(val)

