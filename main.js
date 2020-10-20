class Main {
  factorial(n) {
    var total = 1;
    for (let i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
  }

  first(e) {
    let total = 1;
    for (let i = 1; i <= e; i++) {
      total += 1 / this.factorial(i);
    }
    return total;
  }

  second(e, x) {
    let total = 1;
    for (let i = 1; i <= e; i++) {
      total += Math.pow(x, i) / this.factorial(i);
    }
    return total;
  }
}

let start = new Main();

console.log(start.first(5));
console.log(start.second(5, 1));
