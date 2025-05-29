class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

//ce qui c'est passé est une copie de reference car dans les list et les objet quand on affect 
// une valeur a une autre en affect pas vraiment 
//la valeur mais la reference de case de memoire ocuper c'est pour ca chaque modification 
// ce fait sur counterTwo sera fait aussi sur counterOne