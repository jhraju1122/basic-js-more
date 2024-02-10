//explore what you can do with js object..........
const student = {
    name: 'Shakib khan',
    id: 212,
    address: 'movie cinema',
    isSingle: true,
    friends : ['Apu', 'rajjak', 'sabnur'], //use string
    act: function(){
        console.log('acting like sakib khan')
    },
    car: {
        brand: 'tesla',
        price : 500000,
        color : 'white',
        manufacturer:{
            name : 'tesla',
            ceo : 'elon-mask',
        }
    }
}

// console.log(student);
// console.log(student.car.manufacturer);
console.log(student.act);
student.act();