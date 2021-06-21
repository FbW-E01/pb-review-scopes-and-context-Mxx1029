// # Review - Scopes and Contexts

// 1. What does the following print and why? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242342-f2be2d80-c264-11eb-86b3-f9e02267cf36.png)

/*
console.log(name); // will log Joel, as var variables tend to bleed out of their block scope and are available in global scope, even if they have not been declared there
console.log(likes); // will throw an error, as the const variable can only be accessed in the block scope
*/

// 2. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242468-344ed880-c265-11eb-9b96-17e360eff6f6.png)

/*
the 1st console.log is in function scope
the 2nd console.log is in global scope, but it can't access the variable from the function scope, so throws an error
then the function is run and it would print this
BUT this is never declared, so is also throwing an error
----
now i tried it :)
1st console.log gets an empty object
after function is run we get the Object [global] which is internally to node I presume and part of the call stack maybe?
*/

// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242366-ff428600-c264-11eb-8656-4db8850d7875.png)

/*
would also throw an error, as this is never declared
but also the new instance of Test is not saved to a variable and then invoked, so maybe also undefined, because the printing is only done on the object the class creates, not on the class itself
---
tried it
you get an Test instance without content

*/

// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242400-13868300-c265-11eb-9c0e-2047bf59345d.png)

/*
it would print presumably:
HELLO WORLD! WE ARE THE BEST
HELLO WORLD!
HELLO WORLD! WE ARE THE BEST
HELLO WORLD!
variables are n function scope, so are saved for longer until they are closed in the inner functions (= closure) 
---
tried it
it only prints 
HELLO WORLD!
probably because c() is never invoked, so it's code block is never executed, b() on the other hand gets invoked in a()
makes me realize I mixed up the declaration of functions and the invokin of functions
*/

// **_SURPRISE_ Xtra mini review!**

// 4. Write a function that returns a random number.

const getRandomNumber = () => Math.floor(Math.random() * 101); // gets a random number between 0 and 100
console.log(getRandomNumber());

// 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"`

const translateCatToDog = () => {
    console.log(`""Meow" means "woof" in cat."`);
};
translateCatToDog();

// 6. Write a function that takes in one variable and *returns* the type of that variable

const getType = (input) => typeof input;
console.log(getType("banana"));

// 7. Write a function that takes in a string and returns the first letter in that string

const getFirstLetter = (string) => string[0];
console.log(getFirstLetter("Maui"));

// 7. Write a function that takes in an array and returns the first item in that array

const getFirstElement = (array) => array[0];
console.log(getFirstElement([1, 2, 3]));

// 8. Write a function that takes in a string, and then returns true if that string has 3 characters, otherwise it should return false.

const checkIfThreeChar = (string) => string.length === 3 ? true : false;
console.log(checkIfThreeChar("Ulfi"));
