
// Q:1
// -9 * 3 = -27
// "value is " + 50 = "value is 50"
// 17 % 5 = 2
// 5 % 17 = 5
// 5 / 10 = 0.5
// (4 == 4) is true
// (4 != 5) is true
// (7 <= 8) is true

// Q:2
// let num = prompt("Enter Number")
// alert(num)

// Q:3
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");

// if (num1 && num2) {
//     if (num1 < num2) {
//         alert("Ascending order: " + num1 + " " + num2);
//     } else if (num1 > num2) {
//         alert("Ascending order: " + num2 + " " + num1);
//     } else {
//         alert("Both numbers are equal: " + num1);
//     }
// } else {
//     alert("Invalid input. Please enter valid numbers.");
// }


// Q:4
// let num1 = prompt("Enter First number")
// let num2 = prompt("Enter seacond number")
// if(num1>num2){
//     alert("is larger"+num1)
// }else{
//     alert("is larger" + num2)
 

// Q:5
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = (prompt("Enter the second number:"));

// if (!isNaN(num1) && !isNaN(num2)) {
//     var sum = num1 + num2;
//     alert("The sum is: " + sum);
// } else {
//     alert("Invalid input. Please enter valid numbers.");
// }


// Q:6
// let num = prompt("Enter Number")
// if (num == 1) {
//     alert("ONE")
// } else if (num == 2) {
//     alert("TOW")
// } else if (num == 3) {
//     alert("THREE")
// } else if (num == 4) {
//     alert("FOUR")
// } else if (num == 5) {
//     alert("FIVE")
// } else if (num == 6) {
//     alert("SIX")
// } else if (num == 7) {
//     alert("SEVEN")
// } else if (num == 8) {
//     alert("EIGHT")
// } else if (num == 9) {
//     alert("NINE")
// } else {
//     console.log("PLEASE TRY AGAIN");
// }


//Q7: 
// for (var i = 0; i <= 5; i++) {
//     alert(i);
//   }


// Q:8
// var numbersString = "";

// for (var i = 0; i <= 5; i++) {
//   numbersString += i + " ";
// }

// alert(numbersString);


// Q:9
// for (var i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//       console.log(i); // Display multiples of 3
//       alert(i);
//     }
//   }

// Q:10
// Declare a variable to store the user's input
// var number;
// while (true) {
//   number = parseInt(prompt("Enter a number in the range 0 to 100:"));

//   // Check if the input is a number and within the range
//   if (!isNaN(number) && number >= 0 && number <= 100) {
//     break; // Exit the loop if the input is valid
//   } else {
//     alert("Error: Please enter a valid number in the range 0 to 100.");
//   }
// }

// // After the loop, 'number' contains a valid input
// alert("You entered a valid number: " + number);

//Q:11
// var  userInput;
// while(true){
//   userInput = prompt("Enter a number or type 'exit' to quit:");
//   if(isNaN( userInput)){
//   alert("is not number")
// }else{
//   alert("number " +number)
// }
// }

//Q:12
// let number = prompt("put the number range 0-100");

// let numbersum = 0;
// for (let i = 0; i <= number; i++) {
//   numbersum += i;
// }
// alert(numbersum);

//Q:13
// let prop = prompt("put the number range 0-100");

// let ssum = 0;

// for (let i = 0; i <= prop; i++) {
//   ssum += i;
//   console.log(i);
// }

// let average = ssum / prop;
// average = Math.floor(average);
// alert(average);



