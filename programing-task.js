// example 1
/*  
Hello Manoj,

Programming Test -: First Screening (t2021-2-1)
Last Submission Date : 30/07/2021
Duration: 1 day
Level: BASIC

Instructions:
1. Create a Public GitHub Repository
3. The test can be taken in "any programming language". Please mention coding language and comments in the README file.
4. Once you have completed coding, reply back to the mail where you received this document, with the "URL of the GitHub Public repository".


Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
*/
class Calculator {
 constructor(a, b) {
  this.a = a;
  this.b = b;
 }
 addition() {
  return Number(this.a + this.b);
 }
 substraction() {
  return this.a - this.b;
 }
 multiply() {
  return this.a * this.b;
 }
 division() {
  return this.a / this.b;
 }
}
let calc = new Calculator(4, 3);
calc.addition();
calc.substraction();
calc.division();
calc.multiply()


// example 2
/*

Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
Output: (examples)
1) input a = 1, then output : 1
2) input a = 2, then output : 1
3) input a = 3, then output : 1, 3, 5
4) input a = 4, then output : 1, 3, 5
5) input a = 5, then output : 1, 3, 5, 7, 9
6) input a = 6, then output : 1, 3, 5, 7, 9
.
.
7) input a = x, then output : 1, 3, 5, 7, .......

*/
function seriesGenerate(num) {
 if (num === 1) return num;
 let results = [];
 if (num % 2 == 0) num -= 1;
 for (let i = 1; i <= num * 2; i++) {
  if (i % 2 !== 0) {
   results.push(i)
  }
 }

 return results;
}
seriesGenerate(5)


// example 3
/*
Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
e.g. 1)
input : 2
output : 1
2 , 1
1

e.g. 2)
input : 4
output : 1
2 , 1
1 , 2 , 3
4 , 3 , 2 , 1
1 , 2 , 3
2 , 1
1

e.g. 3)
input : 5
output : 1
2 , 1
1 , 2 , 3
4 , 3 , 2 , 1
1 , 2 , 3 , 4 , 5
4 , 3 , 2 , 1
1 , 2 , 3
2 , 1
1
*/
function helperPatternIncOrder(input, results) {
 for (let no = 1; no <= input; no++) {
  if (no % 2 == 0) {
   //dec order
   for (let j = no; j >= 1; j--) {
    results += j;
   }
   results += '<br/>';
  }
  else {
   //inc order
   for (let j = 1; j <= no; j++) {
    results += j;
   }
   results += '<br/>';
  }
 }
 return results
}

function helperPatternDecOrder(input, results) {
 for (let no = input - 1; no >= 1; no--) {
  if (no % 2 == 0) {
   //dec order
   for (let j = no; j >= 1; j--) {
    results += j;
   }
   results += '<br/>';
  }
  else {
   //inc order
   for (let j = 1; j <= no; j++) {
    results += j;
   }
   results += '<br/>';
  }
 }
 return results;
}
function patternSeries(input, results) {
 let outputs = '';
 document.body.style.textAlign = 'center';
 document.body.style.marginTop = '100px';
 outputs += helperPatternIncOrder(input, results)
 outputs += helperPatternDecOrder(input, results);
 document.body.innerHTML = outputs;
}
patternSeries(5, '');