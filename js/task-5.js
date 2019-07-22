class Car {
    
    constructor({
        price,
        maxSpeed
    }) {
        this.speed = 0;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;

    }
    static getSpecs (car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
    }
    
    get price() {
        return this._price;
    }

    set price(value) {
       this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.speed = 0;
        this.isOn = false;
    }
    accelerate(value) {
        if (this.speed <= this.maxSpeed) {
            this.speed += value;
        }
    }

    decelerate(value) {
        if (value >= 0) {
            this.speed -= value;
        }
    }

    drive(hours) {
        if (this.isOn = true) {
            this.distance = this.distance + (hours * this.speed);
        }
    }

    
}



const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

console.dir(mustang)

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000