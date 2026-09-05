// Import readline module for user input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addTwoNums(num1, num2) {
    return num1 + num2;
}

// Function to get user input (similar to Python's input())
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Main function to handle user input and calculation
async function main() {
    try {
        // Get first number from user
        const input1 = await getUserInput("Enter the first number: ");
        const num1 = parseFloat(input1);
        
        // Get second number from user
        const input2 = await getUserInput("Enter the second number: ");
        const num2 = parseFloat(input2);
        
        // Check if inputs are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please enter valid numbers!");
        } else {
            // Calculate and display result
            const result = addTwoNums(num1, num2);
            console.log(`${num1} + ${num2} = ${result}`);
        }
        
        // Close the readline interface
        rl.close();
    } catch (error) {
        console.log("An error occurred:", error);
        rl.close();
    }
}

// Run the main function
main();