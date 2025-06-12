
/**
 * 
 * @param {Array} str
 */
const perm = (str)  => {
    if (str.length == 1){
       return str
    }else{
       return str.map((l)=>{
          return l + perm(str.filter((s) => s != l)) 
       }) 
    }
}

// string to array
console.log("abc".split(""))

