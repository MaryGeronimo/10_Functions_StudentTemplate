//console.log('I am Connected')

// Demo - 1

// Declare - This does nothing

function funExp1() {
    console.log(Date());
}

// Invoke - This uses the function
funExp1();

// // Example of function doing something 
 function funExp2() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
     console.log(tomorrow);
 }
 funExp2();

 function outputSentence() {
    console.log('This sentence should be outputted. Why? I do not know');
}

outputSentence();

// Demo - 2

function funExp3(arg1, arg2) {
    console.log(arg1 * arg2);
}
funExp3(5,10);

// The above shows that arg1 and arg2 are currently being shown as 5 and 10, where they are being multiplied together

function familyAshford(arg1){
    console.log(arg1, "Ashford");
}

familyAshford('Mary');
familyAshford('Charlie');
familyAshford('Gareth');
familyAshford('Jai');
familyAshford('Katrina');
familyAshford('Heather');


//below code is done through Justin's demo. prompt gives a text box for the user, return is what they write
/*const firstName = prompt('What is your First Name?');
const lastName = prompt('What is your Last Name?');

function fullName(f, l) {
    alert(`My name is ${f} ${l}`);
    return f + l;
}

fullName(firstName, lastName);
confirm('Are you sure?'); */




// Demo - 3

let varExp2 = 10; //global scope
let varExp3 = 10; //global scope

function funExp5() {
    let varExp3 = 100; //local scope
    console.log(varExp2 * varExp3);
}

funExp5();
console.log(varExp2);
console.log(varExp3);


// Demo - 4  => is called a fat arrow

arrowExp1 = () => {
    return new Date();
};
console.log(arrowExp1());

// // Example 2 - Arguments - this example is what our arrow functions should look like if we wanna use them

  arrowExp2 = (arg1, arg2) => {
   return arg1 * arg2;
  };
  console.log(arrowExp2(5, 10));

  arrowExp2 = (arg1, arg2) => {
      return arg1 * arg2;
     };
     console.log(arrowExp2(5, 10));

// // Example 3 - Show the different shape of arrow functions

arrowExp3 = (arg1, arg2) => (
     arg1 * arg2
     );
  console.log(arrowExp3(5, 10));

 const arrowFamilyAshford = (arg1) => {
    console.log(arg1, "Ashford");
};

const helloVar = arrowFamilyAshford('Jai');


//  let varExp7 = (arrowExp4 = (arg1, arg2) => arg1 * arg2);
//  console.log(varExp7(2, 5));

// Demo - 5

// Comparison Operators
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

// Equality Opertors
console.log(10 == '10');
console.log(10 != '10');
console.log(10 === '10');
console.log(10 !== '10');

// Boolean Logic
// IF example
let age = 34;

if (age <= 34) {
	console.log('True in the if statement');
}

let temperature = prompt('What is the temperature?');
let rain = true;

if (temperature <= 0) {
    console.log('Stay inside');
} else if (temperature <= 30 && rain) {
    console.log('Wear a coat and take a brolly!');
} else if (temperature <= 50) {
    console.log('Wear a coat!');
} else {
    console.log('Just pants and vest is fine');
}




// Demo - 6

// Logical Operators
// && || !
/*
if (!1 === 3 && 2 === 2) {
    console.log('this has worked');
} else {
    console.log('this has NOT worked');
}


// truthy or falsy
// falsy = false, 0, -0, '', null, undefined, NaN

/*let var1 = 0

if (var1) {
	console.log('this has worked');
} else {
	console.log('this has NOT worked');
}


// ternary Operator

const varTernary = false
console.log(varTernary ? 'This is the true result' : 'This is the false result');
*/