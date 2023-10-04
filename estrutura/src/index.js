import "./src/styles/index.css";

let soma = (...num) => {
  let total = num.reduce((c, n) => {
    c += n;
    return c;
  }, 0);
  return ` A soma é ${total}`;
};
console.log(soma(1, 2, 12, 16));
