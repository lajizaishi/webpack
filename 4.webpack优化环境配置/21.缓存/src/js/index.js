import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
console.log('++++++++++++++++');
console.log(sum(1, 2, 3, 4));
