def binary_search(t, list):
    first = 0
    last = len(list) - 1

    while first <= last:
        midpoint = (first+last)//2

        if list[midpoint] == t:
            return midpoint
        elif list[midpoint] < t:
            first = midpoint + 1
        else:
            last = midpoint - 1

    return None


def verify(i):
    if i is not None:
        print("Target is found at: ",i)
    else:
        print("Target is not found in list")


number = [1,2,3,4,5,6,7,8,9,10]

result = binary_search(10, number)

verify(result)