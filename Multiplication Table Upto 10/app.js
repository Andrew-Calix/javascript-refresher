const value = parseInt(prompt("Please enter a number : "));

for(let i = 1; i < 11; i++) {
    product = i * value;
    console.log(`${value} x ${i} = ${product}`);
}