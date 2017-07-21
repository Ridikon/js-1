// alert('Hello World');
// document.write('Hello World');
// console.log('Hello World');

// var userName = prompt('Enter your name');
// document.write('Hello ' + userName);

// var userAge = Number(prompt('Enter your age'));

// document.write('<br>');

// document.write('your age ' + userAge);

// document.write('<br>');

// var newAge = sumTree(userAge, 1, 1);//userAge + 1;

// document.write('<br>');
// document.write('next year you will be ' + newAge);

// document.write('<br>');
// document.write('You are ' + checkAge(userAge));

// function sum(a, b) {
//     var result = a + b;
//     return result;
// }

// function sumTree(a, b, c) {
//     var result = a+ b + c;
//     return result;
// }

// function checkAge(age) {
//     if (age < 35) {
//         return 'young';
//     } else {
//         return 'not young';
//     }
// }

// document.write(Math.sqrt(4));

// var userNum = Number(prompt('Введіть число'));

// function elemNum(num) {
//     for(var i = 1; i <= num; i++){
//         if (i % 2 != 0){
//             document.write(i + '<br>');
//         }
//     }

// }

// elemNum(userNum);

// function pow(a, b) {
//     var x = a;
//     for (var i = 1; i < b; i++) {
//         var c = a * x;
//         x = c;
//     }
//     return x;
// }
// function pow(a, b){
//     if (b != 1){
//         return a * pow(a, b - 1);
//     }
//     else {
//         return a;
//     }
// }


// document.write(pow(3, 3));

// function sumTo(n){
//     var result = 0;
//     for(var i = 1; i <= n; i++){
//       result = result + i;
//     }
//     return result
// }

// function sumTo(n){
//     if(n == 1){
//         return n;
//     }
//     return n * (sumTo(n - 1));
// }
// document.write(sumTo(5));

// function task02(first, second, third) {
//     return first + second + third;
// }

// Task03 - Write a code that returns concatenation of 2 inputted strings
// Use space (" ") as a string separator
// For example: 
// first is a string "Hello", second is a string "world!"
// You should return a string "Hello world!"

// function task03(first, second) {
//     return first + ' ' + second;
// }


// Task04 - Write a code that returns string converted from 3 inputted digits
// Don't use a separators in string
// first, second and third are inputed values 
// For example: 
// Inputed value are 2, 5 and 7
// You should return a next string - "257"

// function task04(first, second, third) {
//     return first + second + third; 
// }

// Task05 - Write a code that take 3 digits and create string - 
// -- first and second should be add and it sum concatenate with third digit as a string
// Use coma (",") as a separator
// For example: 
// Inputed value are 2, 5 and 7
// You should return a next string - "7,7"

// function task05(first, second,  third) {
//     return first + second + ',' + third;
// }

// Task06 - Write a code that returns number - result of sum 3 numbers:
// -- first should be extracted from String, second - should be Boolean.
// For example, "10" and true - as a result you get 11 
// or "2long" and true give you 3.

// function task06(string, boolean) {
//     string = Number(string);
//     return string + boolean;// TODO: Write your code here
// }

// console.log(task06('7', true));

// function someFunction() {

//     console.log("You never see this text in console!");

// }



// var someFunction = function() {

//         console.log("You should see this text in console! If you don 't see this text somebody dead in the forest :)" );

//         };



//         someFunction();



//         console.warn("Pay attention that expression way of function creation rewrite function created by declaration way!");

// var a, b;

// b = 2;

// mul(b);

// console.log(a); // ?

// function mul (value) {

//     var a;

//     a = inc(value*2);

// }

// function inc (value) {

//     return value + 1;

// }

// function task03a(num){
// 	return num / 2;
// }

// function task03b() {
// 	return 'result - ' + task03a(6);
// }

// console.log(task03b());

/*function task03(array) {
	array.sort(sortNum);
	var hash = {};
	hash["min"] = array[0];
	hash["max"]	= array.pop();
	return hash;
}

function sortNum(a, b) {
	if (a > b) return 1;
	if (a < b) return -1;
}
  
  var ar = [-1, 8, -3, 0, 7];
  
  console.log(task03(ar));*/

/*var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    noArr = [];

function isAllTrue(sourse, filterFn) {
    if (sourse.length == 0) {
        throw new Error('Порожній масив');
    }
    var val = undefined;
    for (var i = 0; i < sourse.length; i++) {
        var val = sourse[i];
        if (filterFn(val) == true) {
            return true;
        }
    }
    return false;
}

function isNumber(val) {
    return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
try {
    console.log(isAllTrue(noArr, isNumber));
}
catch (e) {
    console.error(e.message);
}*/


function calculator(firstNumber) {
    sum = function() {
        firstNumber = undefined;
        for (var i = 0; i < arguments.length; i++) {
            firstNumber += arguments[i];
        }
        return firstNumber;
    },
    dif = function () {
        firstNumber = undefined;
        for (var i = 0; i < arguments.length; i++) {
            firstNumber -= arguments[i];
        }
        return firstNumber;
    },
    div = function () {
        firstNumber = undefined;
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i] == 0){
                throw new Error('На 0 ділити не можна');
            }
            firstNumber /= arguments[i];
        }
        return firstNumber;
    },
    mul = function () {
        firstNumber = undefined;
        for (var i = 0; i < arguments.length; i++) {
            firstNumber *= arguments[i];
        }
        return firstNumber;
    }
}

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70

try{
   console.log(myCalculator.div(2, 2)); //вернет 25 
}
catch(e){
    console.error(e.message);
}

console.log(myCalculator.mul(2, 2)); //вернет 400
