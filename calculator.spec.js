const calculator = require ('./calculator.js');

describe("add", function() {
  it("adds 0 and 0", function() {
    expect(calculator.add(0,0)).toEqual(0);
  });

  it("adds 2 and 2", function() {
    expect(calculator.add(2,2)).toEqual(4);
  });

  it("adds positive numbers", function() {
    expect(calculator.add(6,2)).toEqual(8);
  });
});

describe("subtract", function() {
  it("subtracts numbers", function() {
    expect(calculator.subtract(8,2)).toEqual(6);
  });
});

describe("multiply", function() {
  it("multiplies numbers", function() {
    expect(calculator.multiply(5,5)).toEqual(25);
  });
});

describe("divide", function() {
  it("divides numbers", function() {
    expect(calculator.divide(10,2)).toEqual(5);
  });
});

describe("operate", function() {
  it("takes in the sum operator and calls an arithmatic function with two numbers", function() {
    expect(calculator.operate("Sum", 10, 10)).toEqual(20);
  });

  it("takes in the difference operator and calls a function with two numbers", function() {
    expect(calculator.operate("Diff", 10, 5)).toEqual(5);
  });

  it("takes in the product operator and calls a function with two numbers", function() {
    expect(calculator.operate("Prod", 10, 10)).toEqual(100);
  });

  it("takes in the quotient operator and calls a function with two numbers", function() {
    expect(calculator.operate("Div", 10, 2)).toEqual(5);
  });
});
