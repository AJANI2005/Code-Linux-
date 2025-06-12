
def perm(arr, l, r):
    if l == r:
        print(arr)
    else:
        for i in range(l, r):
            # Choose
            arr[l], arr[i] = arr[i], arr[l]
            # Explore
            perm(arr, l + 1, r)
            # Un-choose
            arr[l], arr[i] = arr[i], arr[l]

perm([1,0,1], 0, 3)