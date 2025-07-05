
abstract class Vehicle{
    int numberOfWheels = 4;
}

class Car implements Vehicle{
    @override
    int numberOfWheels = 2;
}

void main(){
    var car = Car();
    print(car.numberOfWheels);
}
