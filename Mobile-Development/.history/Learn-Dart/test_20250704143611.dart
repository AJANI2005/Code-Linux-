import 'dart:async';

void main() {
}

Future countDown() async{
   StreamController controller = StreamController();
   for(int i = 10; i >= 0; i--){
      await Future.delayed(Duration(seconds: 1));
      controller.add(i);
   }
   controller.close();
   return controller.stream;
}
