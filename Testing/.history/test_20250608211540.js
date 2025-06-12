
/**
 * 
 * @param {string[]} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return array
    }else{
        return array.reduce((perms, element) => {
            return [...perms, ...perm(array.filter(p => p != element)).map(p => element + p)]
        }, [])
    }
}

// string to array
console.log(perm("abc".split("")))