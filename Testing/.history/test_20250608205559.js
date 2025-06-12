
/**
 * 
 * @param {string[]} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return [array]
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

