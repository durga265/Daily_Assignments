
// Task 1: Creating an Object of a car
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner: {
        firstName: "Jane",
        lastName: "Smith",
        age: 28,
        email: "jane.smith@example.com"
    }
};
console.log(car);

//Task 2: Accessing Object Properties of a car
console.log("make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Owner's First Name :", car.owner.firstName);
console.log("Owner's Last Name:", car.owner.lastName);
console.log("Owner's Age:", car.owner.age);
console.log("Owner's Email:", car.owner.email);

//Task 3: Modifying Object Properties of a car
car.year = 2021;
car.owner.email = "jane2021.smith@example.com";
console.log(car);

//Task 4: Adding New Properties to an Object
car.insurance = {
    provider: "Julio",
    policyNumber: "XYZ1234567",
    expiryDate: "2024-12-31"

}
console.log(car);

//Task 5: Removing Properties from an Object
delete car.owner.email;
console.log(car);

//Task 6: Adding Nested Objects
car.serviceHistory = [
    {
        date: "2021-06-01",
        service: "Oil change",
        cost: 50
    },
    {
        date: "2022-01-15",
        service: "Tire rotation",
        cost: 100
    }

]
console.log(car);

//Task 7: Using for...in Loop
for (let value in car) {
    console.log(`${value}:${car[value]}`)
}

//Bonus Tasks:
//Bonus Task 1: Using Object.keys()

let carkey1 = Object.keys(car);
let carkey2 = Object.keys(car.owner);
let carkey3 = Object.keys(car.insurance);
let carkey4 = Object.keys(car.serviceHistory);
console.log(carkey1);
console.log(carkey2);
console.log(carkey3);
console.log(carkey4);

//Bonus Task 2: Using Object.values()

let carkey5 = Object.values(car);
let carkey6 = Object.values(car.owner);
let carkey7 = Object.values(car.insurance);
let carkey8 = Object.values(car.serviceHistory);
console.log(carkey5);
console.log(carkey6);
console.log(carkey7);
console.log(carkey8);


