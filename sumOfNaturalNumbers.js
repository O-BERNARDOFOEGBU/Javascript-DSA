/*
sum of all natural numbers from 1 to n

sum of 1 to 5: 15
*/

const sumOfNaturalNumbers = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfNaturalNumbers(5));
15;
console.log(sumOfNaturalNumbers(15));
120;
console.log(sumOfNaturalNumbers(100));
5050;

/* 
Alternatively, the mathematical formula for Sum of n Natural Numbers can be represented as [n(n+1)]/2

Sum of n natural numbers can be defined as a form of arithmetic progression where the sum of n terms 
are arranged in a sequence with the first term being 1, n being the number of terms along with the nth term. 
The sum of n natural numbers is represented as [n(n+1)]/2. 
Natural numbers are the numbers that start from 1 and end at infinity. 
Natural numbers include whole numbers in them except the number 0.
*/

//using mathematical formula

const sumOfNaturalNumbersUsingFormula = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumOfNaturalNumbersUsingFormula(5));
