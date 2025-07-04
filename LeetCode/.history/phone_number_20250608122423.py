def letterCombinations(digits: str) -> list[str]:
    if digits == "":
        return []
    res = []

    letters = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
    }
    # start with digits[0]
    # at most the len of letters is 4
    for i in range(len(digits)):
        # Choose
        for a in letters[digits[i]]:
            # Explore 
            for k in range(i+1,len(digits)):
                for b in letters[digits[k]]:
                    res.append(a+b)


    return res


print(letterCombinations("23"))