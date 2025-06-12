
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return [str]
    }else{
        return str.split('').reduce((perms, char) => {
            return [...perms, ...perm(str.split('').filter(p => p != char)).map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc"))