console.log("Andrew Grenon");
///

console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
console.log("Andrew Grenon");
///

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// for loops

//initialise variable
let aVar = 1;

// for loop ---> (initialisation; condition; action) {output}
for (aVar = 1; aVar <= 5; aVar++) {
  console.log(aVar);
}

// from our example earlier a better solution using for loops would be:

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// counting down from 10-1

for (i = 10; i > 0; i--) {
  console.log(i);
}

//rendering first 10 letters of a string

let word = "hippopotamus";

for (i = 0; i <= 9; i++) {
  console.log(word[i]);
}

// rendering whole word

for (i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// while loop ---> while (condition); something

let guess;
const secretNumber = 11;

// while (guess != secretNumber) {
//   guess = prompt("Please choose a number between 1 and 12 🎲");
//   console.log(`It's a ${guess}`);
// }


// create a while loop that logs to the console the guesses and uses conditional
// logic where if user gets the right number it logs a success message

while (guess != secretNumber) {
  guess = prompt("Please guess a number between 1-12! 🎲");
if (guess === null) {
   break;
}
else if (guess == secretNumber) {
  console.log("Well done! You got it, mate!");
} else {
  console.log(`Nice try but ${guess} is wrong... 😢 `);
}

//   // if (guess == secretNumber) {
//   //   console.log("Well done! You got it, mate!");
//   // } else {
//   //   console.log(`Nice try but ${guess} is wrong... 😢 `);
//   // }
//   guess == secretNumber ? console.log("Well done! You got it, mate!") break
//  : console.log(`Nice try but ${guess} is wrong... 😢 `);
}

// make if else ternary

// if (guess === null) {
//    break;
// }
// else if (guess == secretNumber) {
//   console.log("Well done! You got it, mate!");
// } else {
//   console.log(`Nice try but ${guess} is wrong... 😢 `);
// }

//---->

// if (guess == secretNumber) ? console.log("Well done! You got it, mate!")
//  : console.log(`Nice try but ${guess} is wrong... 😢 `);

// now add back to code above

for (let i = 1; i <= 5; i++) {
  // skips 3 and logs 1,2,4,5
  if (i === 3) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  // stops at 3 (logs only 1, 2)
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  // logs 1, 2, 3 then stops
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (let i = 1; i <= 5; i++) {
  // counts until we reach 3 and the logs it
  if (i === 3) {
    console.log(i);
    break;
  }
}

x = 0;

while (true) {
  if (x === 3) {
    console.log("x is now 3");
  }
  if (x === 10) {
    console.log("x is now 10");
  }
  if (x === 15) {
    console.log("x is now 15. Goodbye... ");
    break;
  }
  x++;
}

myString = "Hell@ the#e";

for (i = 0; i < myString.length; i++) {
  if (
    myString[i] == "#" ||
    myString[i] == "@" ||
    myString[i] == "!" ||
    myString[i] == "%"
  ) {
    console.log("Not a valid character");
    break;
  } else {
    console.log(myString[i]);
  }
}

// for (i = 0; i < myString.length; i++) {
//   if (myString[i] == "#" || myString[i] == "@") {
//     console.log("Not a valid character");
//     break;
//   }
//   console.log(myString[i]);
// }

// for of loop ---> for looping over elements of an array

// example

const cars = ["tesla", "jaguar", "ford"];

for (const car of cars) {
  console.log(car);
}

let friends = ["Carlisle", "Eggbert", "Rupert"];

for (let fake of friends) {
  console.log(
    `${fake} sounds like a fake name. Do you have any real friends, Andrew?`
  );
 console.log("I'm sorry, you don't seem to have any real friends");
}

// for in loop ---> for looping over elements of an object/s

const student = {
  name: "Rob",
  age: 25,
  isAdmin: true
};

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

const user = {
  name: "John",
  age: 5,
  isAdmin: true
};

for (const getAge in user) {
  if (getAge == "age") {
    console.log(student[getAge]);
  } 
}
