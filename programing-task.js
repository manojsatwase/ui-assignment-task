// example 1
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