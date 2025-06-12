
def perm(arr, l, r):
    if l == r:
        print(arr)
    else:
        for i in range(l, r):
            arr[l], arr[i] = arr[i], arr[l]
            perm(arr, l + 1, r)
            arr[l], arr[i] = arr[i], arr[l]

perm([1, 2, 3], 0, 3)