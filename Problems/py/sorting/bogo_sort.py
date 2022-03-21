import random
import sys
from load import load_numbers

numbers = load_numbers(sys.argv[1])

def is_sorted(val):
    for i in range(0,len(val) - 1):
        if val[i] > val[i+1]:
            return False
        return True

def bogo_sort(values):
    attempts = 0
    while not is_sorted(values):
        print(attempts)
        random.shuffle(values)
        attempts+= 1
    print(attempts)
    return values

print(bogo_sort(numbers))