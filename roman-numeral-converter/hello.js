// const maybeAHeavyFunction = () => {
//     console.log('maybe I will go in heaven');
// }

// const thisCouldTakeTooLong = () => {
//     console.log('my punch gotam');
// }

// const orMaybeThisOne = () => {
//     console.log('my wish man');
// }


// console.time("answer time");
// maybeAHeavyFunction();
// thisCouldTakeTooLong();
// orMaybeThisOne();
// console.timeEnd("answer time");

// const searchtext = 'Yay! Salesforce is amazing!';

// let result1 = searchtext.search(/sales/i);
// let result2 = searchtext.search(/sales/);

// console.log(result1);
// console.log(result2);

let o = {
    get js() {
        let city1 = String("st. Louis");
        let city2 = String(" New York");
        return {
            firstCity: city1.toLowerCase(),
            secondCity: city2.toLowerCase(),
        }
    }
}


console.log('we expect an error'+o.js.secondCity);

let array = [1,2,3,4,4,5,4,4];

console.log('#TEST '+array.splice(6,1));
array.splice()
// for(let i=0;i < array.length; i++){
//     if(array[i] === 4){
//         array.splice(i, 1);
//     }
// }

console.log('there is our array'+array);


class cake {
 
    #sugar = 'yes';
    #name;

    get getSugar(){
        return this.sugar;
    }

    setCakeName(name){
        this.name = name;
    }

}

let strawberry_cake = new cake();


console.log('we expect an object error'+strawberry_cake);

// let car1 = new promise((_, reject) =>
// setTimeout(reject, 2000, "Car 1 crashed in"));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, "Car 2 completed"));
// let car3 = new Promise(resolve => setTimeout (resolve, 3000, "Car 3 Completed"));
// Promise.race([car1, car2, car3])
// .then(value => (
// let result = `$(value) the race. `;
// )).catch( arr => (
// console.log("Race is cancelled.", err);


console.log('########### ------- ################')

let x;

console.log(x);

async function functionUnderTest(isOk) {
    if (isOk) return 'Ok';
    throw new Error('not Ok');
}

// console.log(functionUnderTest(false));

console.log(parseInt("two"));


function Person() {

    this.firstName = "John";
    this.lastName = 'Doe';
    
    this.name =() => (
    console.log('Hello $(this.firstName) $(this.firstName)')

)}
    
// const john = new Person ();
// const dan = JSON.parse(JSON.stringify(john));
// dan.firstName ='Dan';
// dan.name();

// let car1 = new Promise((_ , reject) =>
// setTimeout(reject, 2000, "car 1 crashed in" =>

// let car2 = new Promise(resolve => setTimeout(resolve, 1500, "car 2 completed")
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, "car 3 completed")
// Promise.race(( car1, car2, car3))
// .then (value => (
// let result = '$(value) the race.' )}
// .catch(arr => {
// console.log("Race is cancelled.", err);
// })


// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let output = 0;

// for(let num of arr){
    
//     if(output > 10){
//         break;
//     }

//     if(num % 2 == 0){
//         continue;
//     }
//     console.log(arr[num]);
//     output += num;

// }


// console.log("# output array "+output);

// function sayHello(name, lastname){
//     console.log(name, lastname);
// }

// setTimeout(sayHello('rsotand','vanelec'),1000);


console.log(Number('1054'));


console.log("--------- 26/10/2022 ----------");

const dl = syncdl => {

    return new Promise((resolve, reject) => {
    
    setTimeout (resolve, dl);

    });

};
    
const callDelay =async () =>{
    
    const yup = await delay(1000);
    
    console.log(1);

}

console.log(true + 3 + '100' + null);

console.log("###### 02/11/2022 ######");

// const exec = (item, delay) => {
//     new promise(resolve => setTimeout( () => resolve(item), delay));
// }

// async function runParallel () {
    
//     const [reult1, result2, result3] = await Promise.all(
//         [exec('x', '100'), exec('y', '300'), exec('z', 100)]
//     );

//     return `Parallel is done : ${result1}${result2}${result3}`;

// }



// runParallel().then(function(data){
//     return data;
// })

function Tiger() {
    this.type = 'cat';
    this.size = 'large';
}

let tony = new Tiger();
tony.roar = () => {
    console.log('They are great');
}

function Lion() {
    this.type = 'cat';
    this.size = 'large';
}


let leo = new Lion();

Object.assign(leo,tony);

// leo.roar = () => (console.log('They are pretty good'))


leo.roar();

// let result = '';
// let car1 = new Promise((_, reject) =>
// setTimeout(reject, 2000, "Car 1 crashed in"));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, "Car 2 completed"));
// let car3 = new Promise(resolve => setTimeout (resolve, 3000, "Car 3 Completed"));
// Promise.race([car1, car2, car3])
// .then(value => (
//     console.log(value+'the race.')
// )).catch( arr => (
//     console.log("Race is cancelled.", err)
// ));

// let counter = 0;

// const logCounter = () => {
//     console.log(counter);
// }

// logCounter();

// setTimeout(logCounter, 1100);

// setInterval(() => {
//     counter++;
//     logCounter();
// }, 1000);


async function ifokfunc(isOk){
    if (isOk) return 'ok';
    throw new Error('not OK');
}

console.assert(ifokfunc(true), 'ok');

function Person() {
    this.firstName = "John";
    this.lastName = 'Doe';
    this.name =() => (console.log('Hello $(this.firstName) $(this.firstName)'))
}
    
const john = new Person ();
const dan = JSON.parse(JSON.stringify(john));

dan.firstName ='Dan';
dan.name;

let arr = [1,2,3,4,5,6,7,8,9,10,11];
let output = 0;

for(let num of arr){
    
    if(output > 10){
        break;
    }

    if(num % 2 == 0){
        continue;
    }
    console.log(num);
    output += num;

}


const objBook = {
    title: 'javascript'
}

Object.preventExtensions(objBook);
const newObjbook = objBook;
newObjbook.author = 'Robert';

console.log("1 " +objBook);
console.log("2 " +newObjbook.title);



let greeting = 'Goodbye';
let salutation = 'Hello, hello, hello';

try{
    greeting = 'Hello';
    decodeURI('%%%');
    salutation = 'Goodbye';
}catch(err){
    salutation = 'I say hello';
}finally {
    salutation= 'Hello, hello';
}

console.log(`Greeting is ${greeting} and salutation is ${salutation}`);

const deliveryDate = new Date ();

deliveryDate.date = new Date(+9) ;

// deliveryDate.setDate(( new Date ( )).getDate () +9);

console.log(deliveryDate);

function formatName(name,pname){
    return name+pname;
}

// setTimeout(() => { formatName('John', 'Doe') }, 2000);


function Person() {
    this.firstName = 'John';
    }
    Person.prototype ={
    Job: x => 'Developer'
    };

    const myFather = new Person();
    const resultat = myFather.firstName + ' ' + myFather.job

console.log(resultat);

function changeValue(obj) {

    obj.value = obj.value/2;
    
}
const objA = { value: 10 };
const objB = objA;
changeValue(objB);
const result = objA.value;

console.log(result);

function getavalaible(set){
    if(set){
        var msg = 'message fair';
    }
    return msg;
}

console.log(getavalaible(false));

function people(firstName, lastName, eyecolor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.eyecolor = eyecolor;
}

people.job = 'developer';

const father = new people('John', 'Milton');
console.log('#job '+father.job);


console.log("/*/*/*/ 03/11/20222 /*/*/*/*/*/*");

let a = ('1' + '2') == (6/ 2);

console.log("#verified : "+a);


JSON.parse('"foo"');

let arr2 = [1,2,3,4,5] 

let x1 = arr.splice (2, 3);
let x2 = arr.slice (2, 3);
// let x3 = arr.alice (2);
let x4 = arr2.filter( (a) => ( a < 2));
let x5 = arr2.filter( (a) => ( a > 2 )) ;

console.log('x1'+x1);
console.log('x2'+x2);
// console.log('x3'+x3);
console.log('x4'+x4);
console.log('x5'+x5);


const pi = 3.1415326;

console.log(typeof pi);


let objc = {
    foo: 1,
    bar: 2
}

let output2 = [];

for(let something in objc) {
    output2.push(something);
}

console.log('#output2# '+output2);


var1 = true;
var2 = false;



let  bemol = {
    name : 'bemol',
    email : 'bemol@mail'
}

let jean = {
    name : 'jean',
    email : 'jean@mail'
}

let Aslie = {
    name : 'Aslie',
    email : 'Aslie@mail'
}

let fiddle = [bemol, jean, Aslie]

console.log('#Group');

console.info(fiddle);

console.log('#04-11-2022');

const copy = JSON.stringify([ new String(' false '), new Boolean( false ), undefined ]);

console.log('copy'+copy);

console.log('###res '+ true+'13'+NaN);





function test (val) {
    if (val === undefined) {
    return 'Undefined values!' ;
    }
    if (val === null) {
    return 'Null value! ';
    }
    return val;
    }

    let bx;

    console.log(test(bx));

let total = 10;

const interval = setInterval (() => {
    total++
    clearInterval(interval)
    total++
}, 0);

total++;

console.log(total);

console.log('********/ 15/11/2022 /**********');

let arr1 = [1,2,3,4,5,6,7,8,9,10,11];
let output1 = 0;

for(let num of arr1){
    
    if(output1 > 10){
        break;
    }

    if(num % 2 == 0){
        continue;
    }

    console.log(num);
    
    // output1 += num;

}


// console.log("# output array"+output1);

console.log('### Mono Theo ###');

const searchtext = 'Yay! Salesforce is amarzing!';

let result1 = searchtext.search(/sales/i);
let result2 = searchtext.search(/sales/);

console.log(result1);
console.log(result2);
