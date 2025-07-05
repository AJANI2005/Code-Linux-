
void main() async{
    // Streams
   countDown();
}

Stream countDown() async* {
    for(int i = 5; i > 0; i--){
       yield i; 
    }
}