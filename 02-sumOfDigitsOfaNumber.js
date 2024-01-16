/*
sum of digits of a number 

e.g 3458 

we have 3+4+5+8 = 20

3458/10 = 345 r 8;

add up remainder after every division by 10

345/10 =  34 r 5;

34/10 = 3 r 4;

3/10 = 0 r 3; 

add up all the remainder, 8+5+4+3 = 20
*/

//lets achieve it in code

const sumOfDigitsOfNumbers = (num) => {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

console.log(sumOfDigitsOfNumbers(34));
