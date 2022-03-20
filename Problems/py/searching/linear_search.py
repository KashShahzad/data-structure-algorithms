from unittest import result


def linear_search(target, list):
    """
    return the index position of target if found, else return None
    we will use range fn with loop instead of for in, because we want the index
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None


def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else:
        print("target not found in list")

num = [1,2,3,4,5,6,7,8,9]

result = linear_search(8, num)
verify(result)

result = linear_search(12, num)
verify(result)