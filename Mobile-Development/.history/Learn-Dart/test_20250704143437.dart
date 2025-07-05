import 'dart:async';

void main() {
   countDown().listen((data) => print(data));
}

Stream countDown() async*{
   StreamController controller = StreamController();
}
