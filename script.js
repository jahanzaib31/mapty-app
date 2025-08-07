// 'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// ////////////////////////////////////////
// ///////// Using the Geolocation API

// // navigator.geolocation.getCurrentPosition();

// // navigator.geolocation.getCurrentPosition(): retrieves/set the device's current location.
// // navigator.geolocation.getCurrentPosition(function() {}, function() {});
// // The first function is the callback function that will be called on success so whenever
// // the browser successfully get the coordinated of the current position of the user

// // The second callback function is the error callback which is the one that's goona be called
// // when there is an error happen while getting the coordinated.
// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log('successfully');
//     console.log(position);
//     // console.log(position.coords.latitude);
//     // console.log(position.coords.longitude);
//     // const latitude = position.coords.latitude;
//     // const longitude = position.coords.longitude;

//     // console.log(latitude, longitude);

//     // Destructuring
//     const {latitude, longitude} = position.coords;
//     console.log(latitude, longitude);

//     // Display a leaflet map

//   const map = L.map('map').setView([latitude, longitude], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([latitude, longitude]).addTo(map).bindPopup('A pretty CSS popup.').openPopup();

// }, function() {
//     console.log('could not get your current position!');
// });

// // const student = {
// //     name: 'Ali',
// //     age: 25,
// //     job: 'Developer',
// // }

// // console.log(student.job)

// // const {name, job} = student;
// // console.log(name, job);

// // OOP

// // Functional Prototype
// // BluePrint

// // Function Declaration

// // function person(firstName, birthYear) {
// //     // this new keyword creates empty object based on blueprint
// //     // this points to the newly created object/instance

// //     this.name = firstName;
// //     this.year = birthYear;
// // }

// // Function Expression

// // const person = function (firstName, birthYear) {
// //     // this new keyword creates empty object based on blueprint
// //     // this points to the newly created object/instance

// //     this.name = firstName;
// //     this.year = birthYear;
// // }

// // // Functions
// // person.prototype.greet = function () {
// //     console.log(`Hey there ${this.name}. Your birth year is ${this.year}`);
// // }

// // const jonas = new person('Jonas', 1991);
// // jonas.greet();
// // const zohaib = new person('Zohaib', 2005);
// // zohaib.greet();

// // console.log(jonas);
// // console.log(zohaib);

// /*
//     this --> jonas

//     ---------------

//     name: jonas
//     year: 1991
//     greet()

//     ---------------

//     this --> zohaib

//     ---------------

//     name: zohaib
//     year: 2005
//     greet()

//     ---------------

// */

// // 1) Function Declaration
// //  function add(a, b) {
// //     console.log(a + b);
// //  }

// //  add(2, 3);

// // 2) function Expression

// // const add = function(a , b) {
// //     console.log(a + b);
// // }

// // add(2, 3);

// // const User = function(userName, password, email) {

// //     this.user = userName;
// //     this.password = password;
// //     this.email = email;

// // }

// // User.prototype.login = function() {
// //     console.log(`${this.user} You are login.`);
// // };

// // User.prototype.sendMessage = function() {
// //     console.log('Message has been sent.');
// // };

// // const jonas = new User('jonas', 'dk234', 'hello@jonas.io');
// // jonas.login();
// // const marry = new User('marry', 'querty23', 'mary@test.com');
// // const steven = new User('steven', 'sp8dz23', 'steven@tes.co');

// // console.log(jonas);
// // console.log(marry);
// // console.log(steven);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // const Car = function(make, speed) {

// //     this.make = make;
// //     this.speed = speed;
// // }

// // Car.prototype.accelerate = function() {
// //     this.speed = this.speed + 10;

// // }

// // Car.prototype.brake = function() {

// //     this.speed = this.speed - 5;
// // }
// // const bmw = new Car('BMW', 120);
// // bmw.accelerate();
// // bmw.brake();
// // console.log(bmw.speed);
// // // console.log(bmw);
// // const mercedes = new Car('Mercedes', 95);
// // mercedes.accelerate();
// // mercedes.brake();
// // console.log(mercedes.speed);

// // console.log(bmw);
// // console.log(mercedes);

// // ES6 Classes
// // Modern way of implementing oop
// // class User {
// //     // constructor function
// //     constructor(username, password, email) {
// //         this.username = username;
// //         this.password = password;
// //         this.email = email;
// //     }

// //     // Functions/Methods

// //     login() {
// //         console.log(`${this.username} is logged in`);
// //     }

// //     sendMessage() {
// //         console.log(`${this.username} message has sent`);
// //     }
// // }

// // const zohaib = new User('zohaib', 'd848', 'zohaib1@gmail.com');

// // console.log(zohaib);
// // zohaib.login();
// // zohaib.sendMessage();

// // class Hotel {
// //     constructor(name, rating, rooms,bookings, gym, pool) {
// //         this.name = name;
// //         this.rating = rating;
// //         this.rooms = rooms;
// //         this.bookings = bookings;
// //         this.gym = gym;
// //         this.pool = pool;
// //     }

// //     makeBooking() {
// //         this.bookings++;
// //     }

// //     cancelBooking() {
// //         this.bookings--;
// //     }

// //     checkAvailability() {
// //         this.available = this.rooms - this.bookings;
// //     }
// // }

// //  const quay = new Hotel('Quay', 4, 42, 22, 'false', 'true' );

// //  console.log(quay);

// //  quay.makeBooking();
// //  console.log(quay);

// //  quay.cancelBooking();
// //  console.log(quay);

// //  quay.checkAvailability();
// //  console.log(quay);

// //  // Getters and Setters
// //  class person {
// //     constructor(fullName, birthYear)  {
// //         this._fullName = fullName;
// //         this._birthYear = birthYear;

// //     }

// //     // Instance Method
// //     calcAge() {
// //         const age = new Date().getFullYear() - this.birthYear;
// //         console.log(age);
// //     }

// //     greet() {
// //         console.log(`Hey ${this._fullName}`);
// //     }

// //     // Getters and setters

// //     // get means return value
// //     get age() {
// //         return new Date().getFullYear() - this.birthYear;
// //     }

// //     get fullName() {
// //         return this._fullName;
// //     }

// //     get birthYear() {
// //         return this._birthYear;
// //     }

// //     set fullName(name) {
// //         if (name.includes(' ')) this._fullName = name;
// //         else alert(`${name} is not a full name`);
// //     }
// //  }

// //  const john = new person('John', 1995);
// //  console.log(john);

// //  console.log(john.birthYear);
// //  console.log(john.fullName);
// //  console.log(john.age);

// //  john.fullName = 'John Smith';
// //  console.log(john);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // const Car = function(make, speed) {

// //     this.make = make;
// //     this.speed = speed;
// // }

// // Car.prototype.accelerate = function() {
// //     this.speed = this.speed + 10;

// // }

// // Car.prototype.brake = function() {

// //     this.speed = this.speed - 5;
// // }
// // const bmw = new Car('BMW', 120);
// // bmw.accelerate();
// // bmw.brake();
// // console.log(bmw.speed);
// // // console.log(bmw);
// // const mercedes = new Car('Mercedes', 95);
// // mercedes.accelerate();
// // mercedes.brake();
// // console.log(mercedes.speed);

// // console.log(bmw);
// // console.log(mercedes);

//  ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed = this.speed + 10;
//     }

//     brake() {
//         this.speed = this.speed - 5;
//     }

//     // Getters

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     // Setter
//     set speedUS(s) {
//         this.speed = s * 1.6;
//     }

// }

// const bmw = new Car('BMW', 120);
// console.log(bmw);
// bmw.accelerate();
// console.log(bmw);
// bmw.brake();
// console.log(bmw);
// console.log(bmw.speedUS);
// bmw.speedUS = 100;
// console.log(bmw);

// // Inheritance

// // Parent/Super Class
// class Person {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;

//     }

//     calculateAge() {
//         this.age = new Date().getFullYear() - this.yearOfBirth;
//     }
// }

// // Child/Sub Class
// class Athlete extends Person {
//     constructor(name, yearOfBirth, job, olympic, olympicMedals, ) {
//         super(name, yearOfBirth, job);

//         this.olympic = olympic;
//         this.olympicMedals = olympicMedals;
//     }

//     get allowedOlympic() {
//         return this.olympic > 0 ? 'Eligible for olympic' : 'Not eligible for olympic';
//     }
// }

// const mj = new Person('Martha Jones', 1990, 'Developer');
// console.log(mj);

// const ub = new Athlete('Usain Bolt', 1986, 'Sprinter', 4 , 8);
// console.log(ub);

// console.log(ub.allowedOlympic);

// class Bird {
//     constructor(name,color) {
//         this.name = name;
//         this.color = color;
//     }

//     fly() {
//         return `${this.name} is flying`;
//     }

//     tweet() {
//         return `${this.name} is singing`;
//     }

// }

// // Child class
// class Parrot extends Bird {
//     constructor(name, color, canTalk) {
//         super(name, color); // call the parent constructor
//         this.canTalk = canTalk;
//     }

//     speak() {
//         if(this.canTalk) {
//             return `${this.name} can talk!`;
//         } else {
//             return `${this.name} cannot talk`;
//         }
//     }
// }

// const gb = new Bird('Sparrow', 'brown');
// console.log(gb.fly());
// console.log(gb.tweet());

// const parrot = new Parrot('Polly', 'green', true);
// console.log(parrot.fly());
// console.log(parrot.tweet());
// console.log(parrot.speak())

// console.log(parrot);
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // Private fields

  // Note: This application actually doesn't need any arguments and so here in this
  // constructor we don't have any parameters because right now we doesn't need any inputs
  // into our applications. If we need it then we could add it to the constructor
  // but in this case that's just not necessary.
  constructor() {
    console.log('Hello from App class constructor!');

    // This keyword points to object
    console.log(this);

    // Get user current position
    this.getPosition();

    // When user submit form
    form.addEventListener('submit', function(e) {
        // PREVENT FROM PAGE REFRESH
        e.preventDefault();
        console.log('Form is submitted');
        console.log(document.querySelector('.form__input--type').value);
        console.log(document.querySelector('.form__input--distance').value);
        console.log(document.querySelector('.form__input--duration').value);
        console.log(document.querySelector('.form__input--cadence').value);
    })
  }

  // Methods
  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // console.log(position);
          // console.log(position.coords);
          // console.log(position.coords.latitude);
          // console.log(position.coords.longitude);

          // Destructuring
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);

          // Load map
          const map = L.map('map').setView([latitude, longitude], 13);
          console.log(map);

          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          // Attach event listner to map
          // User clicks on map
          map.addEventListener('click', function (e) {
            // console.log('Clicked on map');
            // Render workout form
            // Remove hidden class from form
            console.log(document.querySelector('form'));
            form.classList.remove('hidden');
          });
        },

        function () {
          alert('could not get your position');
        }
      );
    }
  }
}

// Create new object out of App Class

const app = new App();
console.log(app);

// class Students {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }

// const john = new Students('John', 25, 'Developer');
// console.log(john);
