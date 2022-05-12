/******************************************************
    Learning to Learn PRO-TIP: 
        Use the "Feynman Technique" to practice and
        and solidify complex concepts without needing 
        to always be in front of a computer!
*******************************************************/

let x = 100

if (x > 5) {
    console.log("x is 5 or more.")
}

while (x > 5) {
    console.log("This is a loop")
    x = x - 1    // For reading order, see: https://mdn.io/pemdas
    // ✅ x = x - 1 (Subtraction then Assignment)
    // ✅ x = x + 1 (Addition then Assignment)
    // ✅ x -= 1 (Subtraction Assignment)
    // ✅ x += 1 (Addition Assignment)
    // ❌ x-- (Postfix Decrement)
    // ❌ --x (Prefix Decrement)
    // ❌ x++ (Postfix Increment)
    // ❌ ++x (Prefix Increment)
}

// ...
// ...
// ...
// ...

let count = 0
while (count < 10) {
    console.log(count)
    // ...
    // ...

    count += 1
}

for (let count = 0; count < 10; count += 1) {
    console.log(count)
    // ...
    // ...
}


console.log("end of the code")
