
void main(){
    getName().then((value) => print(value));
}

Future<String> getName() async {
    return Future(() => "Hello");
}