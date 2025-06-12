
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return str
    }else{
        return str.reduce((perms, element) => {
            return [...perms, ...perm(str.filter(p => p != element)).map(p => element + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc")