// Basic calculator functions using arrow functions
const add = (...numbers) => numbers.reduce((total, num) => total + num, 0);
const subtract = (...numbers) => numbers.reduce((total, num) => total - num);
const multiply = (...numbers) => numbers.reduce((total, num) => total * num, 1);
const divide = (...numbers) => numbers.reduce((total, num) => total / num);
const modulus = (a, b) => a % b;

// Example usage
console.log('Addition:', add(5, 3, 2));          // 10
console.log('Subtraction:', subtract(10, 5, 2));  // 3
console.log('Multiplication:', multiply(2, 3, 4)); // 24
console.log('Division:', divide(100, 2, 2));      // 25
console.log('Modulus:', modulus(10, 3));         // 1

// Function to perform calculation based on operator
const calculate = (operator, ...numbers) => {
    switch(operator) {
        case '+': return add(...numbers);
        case '-': return subtract(...numbers);
        case '*': return multiply(...numbers);
        case '/': return divide(...numbers);
        case '%': return modulus(...numbers);
        default: return 'Invalid operator';
    }
};

// Test the calculator
console.log('Calculate (+ 1,2,3):', calculate('+', 1, 2, 3));    // 6
console.log('Calculate (* 2,3,4):', calculate('*', 2, 3, 4));    // 24
console.log('Calculate (/ 100,2):', calculate('/', 100, 2));     // 50
console.log('Calculate (% 10,3):', calculate('%', 10, 3));       // 1