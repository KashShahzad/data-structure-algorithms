def recursive_bs(t, list):
    # base case
    if len(list) == 0:
        return False
    else:
        midpoint = len(list)//2
        if list[midpoint] == t:
            return True
        else:
            if list[midpoint] < t:
                return recursive_bs(t, list[midpoint+1:])
            else:
                return recursive_bs(t, list[:midpoint])

num = [1,2,3,4,5,6,7,8,9]

result = recursive_bs(5, num)

def verify(result):
    print('target found: ', result)


verify(result)