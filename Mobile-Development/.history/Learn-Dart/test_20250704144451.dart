import 'dart:async';

void main() {
   countDown().listen((data) => print(data));
}

Stream countDown() {
   StreamController controller = StreamController();

   Timer.periodic(Duration(seconds: 1), (timer) {
      controller.add(timer.tick);
   });

   return controller.stream;
}
