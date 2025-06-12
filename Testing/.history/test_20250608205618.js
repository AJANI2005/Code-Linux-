
/**
 * 
 * @param {string[]} array
 */
const perm = (str)  => {
    if (str.length == 1){
       return str
    }else{
        const perms = []
        array.map((letter) => {
           perms.push(letter + perm(array.filter(x => x != letter))) 
        })
        return perms;
    }
}

// string to array
console.log(perm("abc"))

