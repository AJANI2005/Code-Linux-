
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return [str]
    }else{
        return [str].reduce((perms, char) => {
            return [...perms, ...perm(str.replace(char, "")).map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc"))