
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (typeof str == "string"){
        str = str.split("")
    }
    if (str.length == 1){
       return str
    }else{
        return str.reduce((perms, char) => {
            return [...perms, ...perm(str.filter(p => p != char)).map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm(["abc"]))
console.log(..."abc")