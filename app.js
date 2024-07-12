







let arr1 = [10,20,30,40];
let arr2 = [50,60,70];


// spread operator

//arr 2 = [...arr1 ,50,60,70];
arr1 = [10,20,30,40, ...arr2];
// console.log(arr1);

// object ----
let obj={
    l : 10,
    m : 'sam',
    n : 'live class'
}

let obj2={
    ...obj,
    age : 27

}
console.log(obj);

delete obj.m;

console.log(obj);
console.log('Faisal')