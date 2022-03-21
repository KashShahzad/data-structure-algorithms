import sys
from load import load_numbers

numbers = load_numbers(sys.argv[1])

def quick_sort(list):
    if len(list) <=1:
        return list
    less_than_pivot = []
    greater_than_pivot = []
    pivot = list[0]

    for l in list[1:]:
        if l <= pivot:
            less_than_pivot.append(l)
        else:
            greater_than_pivot.append(l)
    print("%15s %1s %-15s" % (less_than_pivot, pivot, greater_than_pivot))
    return quick_sort(less_than_pivot)+[pivot]+quick_sort(greater_than_pivot)

sorted_numbers = quick_sort(numbers)
print(sorted_numbers)