//   1)
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
//   2)    
    getInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}.`);
    }
    startEngine() {
        console.log('Двигатель запущен!');
    }
};

//  3)
let car1 = new Car('Порше', '911', 2025);
car1.getInfo();
car1.startEngine();

//  4)
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand,model, year);
        this.batteryCapacity = batteryCapacity;
    }
    startEngine() {
        console.log('электромотор запущен!');
    }
};

let electriCar = new ElectricCar('Порше', 'Тайкан', '2025', '100');

electriCar.getInfo();
electriCar.startEngine();
