import 'dart:async';

void main() {
   countDown().listen((data) => print(data));
}

Stream countDown() {
   StreamController controller = StreamController();
   for(int i = 10; i >= 0; i--){
      controller.add(i);
   }
   controller.close();
   return controller.stream;
}
