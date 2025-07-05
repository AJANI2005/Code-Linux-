
void main(){


}

Future<String> getName() async {
    await Future.delayed(Duration(seconds: 1));
    return "Hello";
}