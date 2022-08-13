// Escreva uma função que recebe o número e retorne o seguinte
// Use uma função com números de 0 a 100

const myNumbers = (num) => {
  if (typeof num == "number") {
    if (num <= 100 && num >= 0) {
      if (num % 3 != 0 && num % 5 != 0) return num;
      else if (num % 3 == 0 && num % 5 == 0) return "Fizz e Buzz";
      else if (num % 3 == 0) return "Fizz";
      else {
        return "Buzz";
      }
    }
    return "digite um numero menor que 100 e maior que 0";
  }
  return num;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, myNumbers(i));
}
