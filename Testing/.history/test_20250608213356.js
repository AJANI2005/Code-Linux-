
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    // treat strings as arrays
    if (typeof str == "string"){
        str = str.split("")
    }

    if (str.length == 1){
       return str
    }else{
        return str.reduce((perms, char) => {
            return [...perms, ...perm(str.filter((_,i)=>i!=str.indexOf(char))).map(p => char + p)]
        }, [])
    }
}

// string to array
console.log(perm("101121"))