function calculator(num1, num2) {
  const add = num1 + num2;
  const sub = num1 - num2;
  const mul = num1 * num2;
  return [add, sub, mul];
}
const [addition, subtract, multiply] = calculator(400, 70);
console.log(addition, subtract, multiply);
export { addition, subtract, multiply };