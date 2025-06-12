
/**
 * 
 * @param {string[]} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return [array]
    }else{
        return str.reduce((perms, char) => {
            return [...perms, ...perm(str.replace(char, "")).map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc".split("")))