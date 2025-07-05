

String tree(int n){
   if (n == 0){
       return "";
   }else{
       return " " + tree(n-1);
   } 
}

void main(){
}