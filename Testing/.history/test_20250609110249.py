

def f(array, index = 1):
    return array[index] + array[index - 1]

nums = [1,2,3,4,5]
print(list(map(f,nums)))