



// let fruit=['apple', 'guava','mango','banana','litchi','pineapple']
// earlier way 

// let first = fruit[0];
// let second = fruit[1];
// console.log(first);
// console.log(second);

// destructure an array

// let [ sachin,manish,third,fourth ] = fruit;
// console.log(sachin);
// console.log(manish);

//default value
let fruits = ['apple' , 'guava' , 'mango'];
let [sachin,manish,third,fourth='ananas'] = fruits; 


// console.log(sachin)
// console.log(manish)
// console.log(third)
// console.log(fourth)


let car = {
    name: 'nano',
    price : 10000
}

// older way 
//  let n= car.name
//  let p =car.price

// better way 
// object destructuring
// let(n,p)=car;//wrong way
let{name:n,price : p} = car; // right way
console.log(n)
// console.log(name)
console.log(p)
// console.log(price)