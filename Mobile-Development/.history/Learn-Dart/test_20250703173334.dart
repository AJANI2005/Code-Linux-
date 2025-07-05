
void main(){
    getName().then((value) => print(value)).onError(
        (error, stackTrace) => print(error)
    );
}

Future<String> getName() async {
    return Future(() => "Hello");
}