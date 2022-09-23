const car = { jkhfkjfgdmake: 'Honda', jkdfkjklsmodel: 'Accord', ldksjfgklsdfjyear: 1998 };

console.log('12' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"