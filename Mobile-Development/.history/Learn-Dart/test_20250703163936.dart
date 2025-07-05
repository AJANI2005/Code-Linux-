
abstract class Vehicle{
    int numberOfWheels = 4;
}

class Car extends Vehicle{
    int numberOfDoors = 3;
}

void main(){
    var car = Car();
    print(car.numberOfWheels);
    print(car.numberOfDoors);
}
