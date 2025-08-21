// ================================
// 1) Simple if
// Problem: Check if a number is positive.
// If it's positive, print "The number is positive".
console.log("1) Simple if");
{
  let number = 7;
  if (number > 0) {
    console.log("The number is positive");
  }
}
console.log("—");

// ================================
// 2) if / else
// Problem: Given an age, if age >= 18 print "You can get a driver's license",
// otherwise print "You are too young to drive".
console.log("2) if / else");
{
  let age = 14;
  if (age >= 186) {
    console.log("You can get a driver's license");
  } else {
    console.log("You are too young to drive");
  }
}
console.log("—");

// ================================
// 3) if / else if / else
// Problem: Given a temperature (°C):
// - If >= 30, print "It's hot"
// - If 15–29, print "It's warm"
// - Otherwise, print "It's cold"
console.log("3) if / else if / else");
{
  let temperature = 20;
  if (temperature >= 30) {
    console.log("It's hot");
  } else if (temperature >= 15) {
    console.log("It's warm");
  } else {
    console.log("It's cold");
  }
}
console.log("—");

// ================================
// 4) Nested if
// Problem: Movie entry check.
// - If age >= 18, then check hasTicket:
//   - if true -> "Welcome to the movie"
//   - if false -> "You need a ticket"
// - Else -> "You must be 18 or older"
console.log("4) Nested if");
{
  let age = 18;
  let hasTicket = false;
  if (age >= 18) {
    if (hasTicket) {
      console.log("Welcome to the movie");
    } else {
      console.log("You need a ticket");
    }
  } else {
    console.log("You must be 18 or older");
  }
}
console.log("—");

// ================================
// 5) Ternary operator
// Problem: Given isMember, set price:
// - true -> "5 dollars"
// - false -> "10 dollars"
console.log("5) Ternary");
{
  let isMember = true;
  let price = isMember ? "5 dollars" : "10 dollars";
  console.log(price);
}
console.log("—");

// ================================
// 6) Switch
// Problem: Print month name from number (1–12).
// If outside 1–12, print "Invalid month".
console.log("6) Switch");
{
  let month = 4;
  let monthName;
  switch (month) {
    case 1: monthName = "January"; break;
    case 2: monthName = "February"; break;
    case 3: monthName = "March"; break;
    case 4: monthName = "April"; break;
    case 5: monthName = "May"; break;
    case 6: monthName = "June"; break;
    case 7: monthName = "July"; break;
    case 8: monthName = "August"; break;
    case 9: monthName = "September"; break;
    case 10: monthName = "October"; break;
    case 11: monthName = "November"; break;
    case 12: monthName = "December"; break;
    default: monthName = "Invalid month";
  }
  console.log(monthName);
}
console.log("—");

// ================================
// 7) For loop (counting)
// Problem: Print numbers 1 to 10.
console.log("7) For loop (1..10)");
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
console.log("—");

// ================================
// 8) For loop with array
// Problem: Given ["dog", "cat", "rabbit"], print each animal.
console.log("8) For loop over array");
{
  const animals = ["dog", "cat", "rabbit"];
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}
console.log("—");

// ================================
// 9) For...of loop
// Problem: Use for...of to print each letter of "JavaScript".
console.log("9) for...of over string");
{
  for (const letter of "JavaScript") {
    console.log(letter);
  }
}
console.log("—");

// ================================
// 10) For loop with continue and break
// Problem: Print numbers 1..10, skip 5 (continue), stop at 8 (break).
console.log("10) For with continue and break");
{
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // skip 5
    }
    if (i === 8) {
      break; // stop completely at 8
    }
    console.log(i);
  }
}
console.log("—");

// ================================
// 11) While loop
// Problem: Count down from 5 to 1 using while.
console.log("11) While countdown 5..1");
{
  let i = 5;
  while (i > 0) {
    console.log(i);
    i--;
  }
}
console.log("—");

// ================================
// 12) Do...while loop
// Problem: Simulate "Do you want to play again?" using a variable.
// As long as answer is "yes", print "Playing again...".
// Ensure it runs at least once.
console.log("12) Do...while");
{
  let answer = "yes";
  do {
    console.log("Playing again...");
    // Simulate the user changing their mind:
    answer = "no";
  } while (answer === "yes");
}
console.log("— End —");
