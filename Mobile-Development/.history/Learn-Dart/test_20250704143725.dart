import 'dart:async';

void main() {
   countDown().listen((data) => print(data));
}

Stream countDown() async*{
   StreamController controller = StreamController();
   for(int i = 10; i >= 0; i--){
      await Future.delayed(Duration(seconds: 1));
      controller.add(i);
   }
   controller.close();
   yield* controller.stream;
}
