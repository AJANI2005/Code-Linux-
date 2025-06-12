
/**
 * 
 * @param {Array} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return array
    }else{
        const perms = []
        array.forEach((element) => {
           perms.append(perm(array.filter(item => item != element))) 
        })
    }
}

// string to array
console.log(perm("abc".split("")))

