
import 'dart:async';

void main() async{
   // Streams
   countDown().listen((value) => print(value));
}

Stream countDown() async* {
    for(int i = 5; i > 0; i--){
       yield i; 
    }
}