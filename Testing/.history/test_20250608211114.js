
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return [str]
    }else{
        return str.reduce((acc, char) => {
            const perms = perm(str.replace(char, ""))
            return [...acc, ...perms.map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc"))