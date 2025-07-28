// greet("Khalid Takala"); 
// function greet(theName) {
//     console.log("Greetingsss, " + theName + "!");
// }



//----------------------------
function Calc(num1, num2, operation) {
    if (operation === "+") {return num1 + num2;} 
    else if (operation === "-") {return num1 - num2;}
    else if (operation === "*") {return num1 * num2;}
    else if (operation === "/") {return num1 / num2;}
    else {return null;}
}

for (let i = 1; i <= 20; i++) {
    let oprand;
    oprand = "+";
    oprand = "/";   
    oprand = "*";
    oprand = "-";

    // Prompt user for operation
    //oprand = prompt("Enter operation (+, -, *, /) for i = " + i + ":");

    console.log ("Total of " + i + " " + oprand + " " + i + "=" + Calc(i, i, oprand))
}

// for (let i = 1; i <= 10; i++) {
//     greet("User " + i);
// }
