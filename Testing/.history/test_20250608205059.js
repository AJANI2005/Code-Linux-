
/**
 * 
 * @param {Array} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return array
    }else{
       
       return array.reduce((acc,l) =>{
            return acc.append(l + perm(array.filter((s) => s != l)))
       }, []) 
    }
}

// string to array
console.log(perm("abc".split("")))

