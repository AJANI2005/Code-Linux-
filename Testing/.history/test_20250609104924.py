
def perm(s):
    if type(s) != str:
        s = str(s) 

    if len(s) == 1:
        return [s]
    else:
        return map(lambda x: x[0] + x[1], zip(s, perm(s[1:])))
    return [s]
    

print(perm('abc'))