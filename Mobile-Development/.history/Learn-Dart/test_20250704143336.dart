
void main() {
   countDown().listen((data) => print(data));
}

Stream countDown() async*{
   for(int i = 5; i > 0; i--){
      yield i;
   }
}
