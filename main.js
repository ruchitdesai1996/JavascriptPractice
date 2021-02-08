// datatypes : String, number, boolean, null, undefined, symbol.

/*const s = 'Hello World!';

console.log(s.length);
console.log(s.split(''));

// Concatenation

//console.log('My name is ' + name + ' My age is ' + age );

//const hello = `My name is ${name} and I am ${age}`;

//console.log(hello);

//Arrays 

//const number = new Array(1,2,3,4,5);
//console.log(number);


/*const s1 = ['apple', 'banana', 'mango'];

console.log(s1[1]);

s1.push('grapes');

console.log(s1);

s1.unshift('lemon');
console.log(s1);

s1.pop();
console.log(s1);
*/

//console.log(s1.split(','));

//Object literals

/*const person = {
    firstname: 'Ruchit',
    lastname:'Desai',
    age: 24,
    residence: 'Heidelberg',
    hobbies: ['Cricket', 'PS5', 'Nintendo'],
    address: {
        street: 'Ringstrasse',
        number: 32,

    }

}

person.email = 'ruchitdesai@fimal.com'

console.log(person);
*/


const todos = [

    {
        id:1,
        text: 'Take the waste out',
        isCompleted: true

    },

    {
        id:2,
        text: 'Meet the manager',
        isCompleted: true

    },

    {
        id:3,
        text:'Go for the doctor appointment',
        isCompleted: false

    }   

];
console.log(todos);

//for loops

for(let i = 0; i<=10; i++ ) {

    console.log(i);

}

//while

let i=0;

while(i<10) {

    console.log(i);
    i++;
}


//for(let i = 0; i <todos.length; i++ ) {

   // console.log(todos[i].text);

//}


for(let todo of todos) {

    console.log(todo.id);

}


// forEach, map, filter

todos.forEach(function(todo) {

    console.log(todo.text);
});

//map

const todoText = todos.map(function(todo) {

    return todo.text;
    
});
console.log(todoText);


//filter

const todoCompleted = todos.filter(function(todo) {

    return todo.isCompleted === true;
}).map(function(todo) {

    return todo.text;
});


console.log(todoCompleted);

//conditionals 

 /*   const x = 30;

    if(x === 10) {

        console.log('x');
        

    }
    elseif (x < 10 ) {

        console.log('x is less then 10');
    }

    else {

        console.log('x is not 10');
    }

*/

/*const x = 23;

const color = x > 10 ? 'red':

console.log(color);
*/

const x = 15;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {

    case 'red':

        console.log('red');

    break;

    case 'blue':

        console.log('blue');
    
    break;
    


}

function addNums(num1, num2) {

    console.log(num1 + num2);
}
//addNums(4,5);


const addNum = (num1 = 1, num2 = 2) => num1 + num2;

   

console.log(addNum(1,2));

//Constructor function

/*function Person(firstname,lastname,dob) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function() {

        return this.dob.getFullYear();
    }  

    
    this.getFirstName = function() {

        return `${this.firstname}`;
    }
}

Person.prototype.getFullName = function() {

    return `${this.firstname} ${this.lastname}`;
}
*/

//Class

class Person {

    constructor(firstname, lastname, dob) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

   }

   getFirstName() {

    return `${this.firstname}`;

   }

   getBirthYear() {

    return this.dob.getFullYear();

   }



}





//Instantiate Object

const person1 = new Person('Ruchit', 'Desai', '3-4-2000');
const person2 = new Person('Leonie', 'Schurr','2-2-2000');

console.log(person1.dob.getFullYear());


console.log(person1.getBirthYear());
console.log(person1.getFirstName());







    




