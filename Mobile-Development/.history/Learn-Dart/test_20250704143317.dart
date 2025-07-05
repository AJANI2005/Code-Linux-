
void main() {
   countDown();
}

Stream countDown() async*{
   for(int i = 5; i > 0; i--){
      print(i);
   }
}
