
def perm(str):
    if len(str) == 1:
        return [str]
    else:
        return [str[i] + perm(str[:i] + str[i + 1:]) for i in range(len(str))]
    

print(perm('abc'))