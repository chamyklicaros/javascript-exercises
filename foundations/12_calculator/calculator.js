function add(a, b) {
  return a + b;
}
function subtract(a,b){
  return a-b;
}
function sum (arr){
  sum = 0
  for (let i = 0; i <arr.length; i++){
    sum += arr[i];
  }
  return sum;

}

function multiply(arr){
  let product = 1;
    for (let i = 0; i <arr.length; i++){
      product *= arr[i];
    }
  return product;
}

function power(Base,exponent){
  return Base ** exponent;

}

function factorial(n){
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
