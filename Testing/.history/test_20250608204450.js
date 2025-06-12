
/**
 * 
 * @param {Array} array
 */
const perm = (array)  => {
    if (array.length == 1){
       return array
    }else{
       return array.map((l)=>{
          return l + perm(array.filter((s) => s != l)) 
       }) 
    }
}

// string to array
console.log("abc".split(""))

