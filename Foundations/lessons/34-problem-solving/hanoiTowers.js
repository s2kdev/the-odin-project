// функция которая решает задачу с перекладыванием 3-х дисков, т.е. построение "Ханойской башни"
function hanoi(n, from, to, temp) {
  if (n === 1) {
    console.log(`Переложить диск 1 со стержня ${from} на стержень ${to}`);
    return;
  }

  hanoi(n - 1, from, temp, to);
  console.log(`Переложить диск ${n} со стержня ${from} на стержень ${to}`);
  hanoi(n - 1, temp, to, from);
}

hanoi(3, 'A', 'C', 'B');

// Переложить диск 1 со стержня A на стержень C
// Переложить диск 2 со стержня A на стержень B
// Переложить диск 1 со стержня C на стержень B
// Переложить диск 3 со стержня A на стержень C
// Переложить диск 1 со стержня B на стержень A
// Переложить диск 2 со стержня B на стержень C
// Переложить диск 1 со стержня A на стержень C
