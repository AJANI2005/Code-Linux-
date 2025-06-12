

g = lambda a,i: a[i],a[i-1] 

nums = [1,2,3,4,5]

print(list(map(g,nums,nums)))