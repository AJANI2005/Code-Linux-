def letterCombinations(digits: str) -> list[str]:
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

    print(letters["2"])

    return res

print(letterCombinations("23"))