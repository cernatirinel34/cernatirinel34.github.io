function calculator(num1, num2, operator)

{
  var operator = operator;
  var total;


  switch (operator) {
      case "+":
          total = num1 + num2;
        break;
        case "/":
            total = num1 / num2;
        break;
        case "-":
            total = num1 - num2;
        break;
        case "*":
            total = num1 * num2;
        break;
        case "%":
            total = num1 % num2;
        break;
        default:
            0;
        break;
  }
return total;
}
console.log(calculator(5, 15, "+"));