def longest_pal(s: str):
    if len(s)<= 1:
        return s
    
    def expand(left,right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1
   
    start,end = 0,0
    for i in range(len(s)):
        # Odd center
        l1,r1 = expand(i,i)

        # Even center
        l2,r2  = expand(i,i+1)

        if r1 - l1 > end - start:
            start,end = l1,r1
        if r2 - l2 > end - start:
            start,end = l2,r2

    return s[start:end+1]




print(longest_pal("babad"))



