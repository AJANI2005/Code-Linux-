
/**
 * 
 * @param {string} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return [str]
    }else{
        const perms = []
        str.split("").forEach((char, i) => {
           perms.push(
               ...perm(str.slice(0, i) + str.slice(i + 1)).map(p => char + p)
           ) 
        })
        return perms;
    }
}

// string to array
console.log(perm("abc"))

