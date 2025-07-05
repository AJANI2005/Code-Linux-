
abstract class Vehicle{
    int numberOfWheels = 4;
}

class Car implements Vehicle{
    int numberOfWheels = 4;
}

void main(){
    var car = Car();
    print(car.numberOfWheels);
}
