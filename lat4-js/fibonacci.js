function fibonacci(n) {
    let fib = [0, 1];
    
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib;
}

// Print first 10 numbers of Fibonacci sequence
const count = 10;
const result = fibonacci(count);
console.log("Deret Fibonacci pertama " + count + " angka:");
console.log(result.join(", "));

// Contoh penggunaan lain
console.log("\nDeret Fibonacci pertama 15 angka:");
console.log(fibonacci(15).join(", "));