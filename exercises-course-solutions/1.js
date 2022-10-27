// 1-COMMENT YOUR JAVASCRIPT CODE
// this is an in-line comment.
/* this is a multi-line comment */

// 2-DECLARE JAVASCRIPT VARIABLES
var myName;

// 3-STORING VALUES WITH THE ASSIGNMENT OPERATOR
a = 7;

// 4-ASSIGNING THE VALUE OF ONE VARIABLE TO ANOTHER
var a;
a = 7;
var b;
b = a;

// 5-INITIALIZING VARIABLES WITH THE ASSIGNMENT OPERATOR
var a = 9;

// 6-DECLARE STRING VARIABLES
var myFirstName = "First name";
var myLastName = "Last name";

// 7-UNDERSTANDING UNINITIALIZED VARIABLES
var a = 5;
var b = 10;
var c = "I am a";

// 8-UNDERSTANDING CASE SENSITIVITY IN VARIABLES
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9-EXPLORE DIFFERENCE BETWEEN THE VAR AND LET KEYWORDS
var camper = "James"; // overridden to be david
var camper = "David";
console.log(camper); //because this behavior does not throw an error, searching for and fixing bugs becomes more difficult
/*
let camper = "James"; // variables with let keyword and the same name can only be declared once
let camper = "David";
console.log(camper); // the error can be seen in your browser console

let catName = "Oliver";
let catSound = "Meow!";
*/

// 10-DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD
/* 
const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, 
which means that once a variable is assigned with const, it cannot be reassigned:

You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable 
that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects 
and arrays)
*/
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// 11-ADD TWO NUMBERS WITH JAVASCRIPT
/* 
JavaScript uses the + symbol as an addition operator when placed between two numbers. 
*/
const sum = 10 + 10;

// 12-SUBTRACT ONE NUMBER FROM ANOTHER WITH JAVASCRIPT
/* 
JavaScript uses the - symbol for subtraction. 
*/
const difference = 45 - 33;

// 13-MULTIPLY TWO NUMBERS WITH JAVASCRIPT
/* 
JavaScript uses the * symbol for multiplication of two numbers. 
*/
const product = 8 * 10;

// 14-DIVIDE ONE NUMBER BY ANOTHER WITH JAVASCRIPT
/* 
JavaScript uses the / symbol for division. 
*/
const quotient = 66 / 33;

// 15-INCREMENT A NUMBER WITH JAVASCRIPT
/*
You can easily increment or add one to a variable with the ++ operator.
i++; 

Note: The entire line becomes i++;, eliminating the need for the equal sign.

i = i + 1;
myVar = myVar + 1;
myVar++; 
*/

// 16-DECREMENT A NUMBER WITH JAVASCRIPT
/*
You can easily decrement or decrease a variable by one with the -- operator.
i--; 

Note: The entire line becomes i--;, eliminating the need for the equal sign.

i = i - 1;
myVar = myVar - 1;
myVar--; 
*/

// 17-CREATE DECIMAL NUMBERS WITH JAVASCRIPT
/*
Decimal numbers are sometimes referred to as floating point numbers or floats.

Note: Not all real numbers can accurately be represented in floating point. This can lead to rounding errors
*/
const myDecimal = 6.75;

// 18-MULTIPLY TWO DECIMALS WITH JAVASCRIPT
/* 
const product = 2.0 * 2.5; 
*/

// 19-DIVIDE ONE DECIMAL BY ANOTHER WITH JAVASCRIPT
/* 
const quotient = 4.4 / 2.0;  
*/

// 20-FINDING A REMAINDER WITH JAVASCRIPT 
/* 
The remainder operator % gives the remainder of the division of two numbers. 
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)

In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
*/
const remainder = 11 % 3;

// 21-COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
/* 
In programming, it is common to use assignments to modify the contents of a variable 

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

let myVar = 1;
myVar += 5;
console.log(myVar);

let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
*/

// 22-COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
/* 
Like the += operator, -= subtracts a number from a variable.
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
*/

// 23-COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
/*
The *= operator multiplies a variable by a number.
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;
*/

// 24-COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
/*
The /= operator divides a variable by another number.
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
*/

// 25-ESCAPING LITERAL QUOTES
/*
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to 
the console, you would get:

Alan said, "Peter is learning JavaScript".
*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 26-QUOTING STRINGS WITH SINGLE QUOTES
/*
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote.

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation 
in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
*/
const ourStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27-ESCAPE SEQUENCES IN STRINGS
/*
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.

To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.
*/
const theirStr = "FirstLine\n\t\\Secondline\nThirdLine";

// 28-CONCATENATING STRINGS WITH PLUS OPERATOR
/*
In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by 
concatenating them together.
*/
const otherStr = "This is the start. " + "This is the end.";

// 29-CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
/*
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.
*/
let anotherStr = "This is the first sentence. ";
anotherStr += "This is the second sentence."

// 30-CONSTRUCTING STRINGS WITH VARIABLES
/*
Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.
*/
const jeName = "Pedro";
const myString = "My name is " + jeName + " and I am well!";

// 31-APPENDING VARIBALES WITH STRINGS
/*
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.
*/
const someAdjective = "cool";
let myStrg = "Learning to code is "
myStrg += someAdjective

// 32-FIND THE LENGTH OF A STRING
/*
You can find the length of a String value by writing .length after the string variable or string literal.
*/
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// 33-USE BRACKET NOTATION TO FIND THE FIRST CHARACTER IN A STRING
/* 
Bracket notation is a way to get a character at a specific index within a string. 
*/
let firstLetterOfLastName = "";
const last1Name = "Lovelace";
firstLetterOfLastName = last1Name[0];

// 34-UNDERSTAND STRING IMMUTABILITY
/*
String values are immutable, which means that they cannot be altered once created
*/
let myStri = "Jello World";
// myStri[0] = "H";
myStri = "Hello World";

// 35-USE BRACKET NOTATION TO FIND THE NTH CHARACTER IN A STRING
/*
You can also use bracket notation to get the character at other positions within a string.
*/
const firstName = "Lovelace";
const thirdLetterOfFirstName = firstName[2];

// 36-USE BRACKET NOTATION TO FIND THE LAST CHARACTER IN A STRING
/*
In order to get the last letter of a string, you can subtract one from the string's length.
*/
const last2Name = "Lovelace";
const lastLetterOfLastName = last2Name[last2Name.length - 1];

// 37-USE BRACKET NOTATION TO FIND THE NTH-TO-LAST CHARACTER IN A STRING
/*
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
*/
const last3Name = "Lovelace";
const lastLetterOfLast3Name = last3Name[last3Name.length - 2];

// 38-WORD BLANKS
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " to the owner.";

// 39-STORE MULTIPLE VALUES IN ONE VARIABLE USING JAVASCRIPT ARRAYS
/*
With JavaScript array variables, we can store several pieces of data in one place.
*/
const myArray = ["string", 5];

// 40-NEST ONE ARRAY WITHIN ANOTHER ARRAY
const fruit = [["orange", 10], ["aple", 15]];

// 41-ACCESS ARRAY DATA WITH INDEXES
const myArray1 = [50, 60, 70];
const myData = myArray1[0];

// 42-MODIFY ARRAY DATA WITH INDEXES
const myArray2 = [18, 64, 99];
myArray2[0] = 45;

// 43-ACCESS MULTI-DIMENSIONAL ARRAYS DATA WITH INDEXES
const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData1 = myArray3[2][1];

// 44-MANIPULATE ARRAYS WITH PUSH()
/*
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
*/
const myArray4 = [["John", 23], ["cat", 2]];
myArray4.push(["dog", 3]);

// 45-MANIPULATE ARRAYS WITH POP()
/*
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the 
last element from an array and returns that element.
*/
const myArray5 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray5.pop();

// 46-MANIPULATE ARRAYS WITH SHIFT()
/*
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
*/
const myArray6 = [["John", 23], ["dog", 3]];
const removedFromMyArray6 = myArray6.shift()

// 47-MANIPULATE ARRAYS WITH UNSHIFT()
/*
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
*/
const myArray7 = [["John", 23], ["dog", 3]];
myArray7.shift();
myArray7.unshift(["Paul", 35]);

// 48-SHOPPING LIST
const myList = [["oranges", 15], ["apples", 10], ["bananas", 5],
["pears", 6], ["peaches", 7]];

// 49-WRITE REUSABLE JAVASCRIPT WITH FUNCTIONS
/*
In JavaScript, we can divide up our code into reusable parts called functions.
*/
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction()

// 50-PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
/*
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.

The actual values that are input (or "passed") into a function when it is called are known as arguments.
*/
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2)
functionWithArgs(7, 9)

// 51-RETURN A VALUE FROM A FUNCTION WITH RETURN
/*
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
*/
function timesFive(num) {
    return num * 5;
}
timesFive(5)
timesFive(2)
timesFive(0)

console.log(timesFive(5), timesFive(2), timesFive(0))

// 52-GLOBAL SCOPE AND FUNCTIONS
/*
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be 
seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope.
*/
const myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}

// 53-LOCAL SCOPE AND FUNCTIONS
/*
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  myTest();
  console.log(loc); // it will throw an error, as loc is not defined outside of the function

function myLocalScope() {
    const myVar = "";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);
*/

// 54-GLOBAL VS LOCAL SCOPE IN FUNCTIONS
/*
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/
const outerWear = "T-Shirt";
function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}
myOutfit();

// 55-UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
/*
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the 
function processes the inner code but the returned value is undefined.
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}
addThree();
addFive();
*/

// 56-ASSIGNMENT WITH A RETURNED VALUE
/*
Everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
*/
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

// 57-STAND IN LINE
/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are 
taken off from the front of the queue.
*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
const testArr = [1, 2, 3, 4, 5];
nextInLine(testArr, 6)
console.log(nextInLine(testArr, 6))
console.log(testArr)

// w3schools.com - JSON.stringify()
/*
The JSON.stringify() method converts JavaScript objects into strings.
When sending data to a web server the data has to be a string.
*/

/*
var obj = { "name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
console.log(obj)
console.log(myJSON)
*/

/*
var obj = { "name":"John", "age":"39", "city":"New York"};
var text = JSON.stringify(obj, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});
document.getElementById("demo").innerHTML = text
*/

// developer.mozilla - JSON.stringify()
/*
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or 
optionally including only the specified properties if a replacer array is specified.
*/

/*
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
*/

// 58-UNDERSTANDING BOOLEAN VALUES
/*
They are basically little on-off switches, where true is on and false is off.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
*/
function welcomeToBooleans() {
    return true; // changed from false to true
}
welcomeToBooleans()

// 59-USE CONDITIONAL LOGIC WITH IF STATEMENTS
/*
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, 
defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the 
statement inside the curly braces will not execute.
*/
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
trueOrFalse(true);

// 60-COMPARISON WITH THE EQUALITY OPERATOR
/*
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}
testEqual(10);

// 61-COMPARISON WITH THE STRICT EQUALITY OPERATOR
/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values 
being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
3 ===  3  // true
3 === '3' // false
*/
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not equal"
}
testStrict(10)

// 62-PRACTICE COMPARING DIFFERENT VALUES
/*
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the 
strict equality operator will compare both the data type and value as-is, without converting one type to the other.

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type 
conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.
*/
function compareEquality1(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}
compareEquality1(10, "10")

// 63-COMPARISON WITH THE INEQUALITY OPERATOR
/*
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. 

Like the equality operator, the inequality operator will convert data types of values while comparing.
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
*/
function testNotEqual(val) {
    if (val != 99) {
        return "Not equal";
    }
    return "Equal"
}
testNotEqual(10)

// 64-COMPARISON WITH THE STRICT INEQUALITY OPERATOR
/*
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict 
equality would return true and vice versa. The strict inequality operator will not convert data types.
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}
testStrictNotEqual(10)

// 65-COMPARISON WITH THE GREATER THAN OPERATOR
/*
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, 
it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
*/
function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "over 10";
    }
    return "10 or under";
}
testGreaterThan(10);

// 66-COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR
/*
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, 
it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
*/
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "less than 10";
}
testGreaterOrEqual(10);

// 67-COMPARISON WITH THE LESS THAN OPERATOR
/*
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, 
it returns false. Like the equality operator, the less than operator converts data types while comparing.
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
*/
function testLessThan(val) {
    if (val < 25) {
        return "under 25";
    }
    if (val < 55) {
        return "under 55";
    }
    return "55 or over";
}
testLessThan(10);

// 68-COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR
/*
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, 
it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal 
to operator converts data types.
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
*/
function testLessOrEqual(val) {
    if (val <= 12) {
        return "smaller than or equal to 12";
    }
    if (val <= 24) {
        return "smaller than or equal to 24";
    }
    return "more than 24";
}
testLessOrEqual(10);

// 69-COMPARISON WITH THE LOGICAL AND OPERATOR
/*
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and 
right of it are true
*/
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "yes";
    }
    return "no";
}
testLogicalAnd(10);

// 70-COMPARISONS WITH THE LOGICAL OR OPERATOR
/*
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
*/
/*
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "outside";
    }
    return "inside";
}
testLogicalOr(15);
*/

// 71-INTRODUCING ELSE STATEMENTS
/*
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing 
would happen. With an else statement, an alternate block of code can be executed.
*/
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "bigger than 5";
    } else {
        result = "5 or smaller";
    }
}
testElse(4);

// 72-INTRODUCING ELSE IF STATEMENTS
/*
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
*/
function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    } else {
        return "between 5 and 10";
    }
}
testElseIf(7);

// 73-LOGICAL ORDER IN IF ELSE STATEMENTS
/*
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.
*/
function orderMyLogic(val) {
    if (val < 5) {
        return "less than 5";
    } else if (val < 10) {
        return "less than 10";
    } else {
        return "greater than or equal to 10";
    }
}
orderMyLogic(7);

// 74-CHAINING IF ELSE STATEMENTS
/*
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
*/
function testSize(num) {
    if (num < 5) {
        return "tiny";
    } else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "medium";
    } else if (num < 20) {
        return "large";
    } else {
        return "huge";
    }
}
testSize(7);

// 75-GOLF CODE
/*
In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to 
complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; 
top (highest) to bottom (lowest):
Strokes	Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1 	"Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}
console.log(golfScore(5, 4)) // strokes 4 returns birdie;

// 76-SELECTING FROM MANY OPTIONS WITH SWITCH STATEMENTS
/*
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various 
possible values. Statements are executed from the first matched case value until a break is encountered.
*/
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
caseInSwitch(1);

// 77-ADDING A DEFAULT OPTION IN SWITCH STATEMENTS
/*
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be 
executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
*/
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
switchOfStuff(1);

// 78-MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
/*
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have 
multiple inputs with the same output, you can represent them in a switch statement like this:
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.
*/
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
sequentialSizes(1);

// 79-REPLACING IF ELSE CHAINS WITH SWITCH
/*
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements
*/
function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case "John":
            answer = "";
            break;
        default:
            answer = "";
            break;
    }
    return answer;
}
chainToSwitch(7);

// 80-RETURNING BOOLEAN VALUES FROM FUNCTIONS
/*
You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison
*/
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);

// 81-RETURN EARLY PATTERN FOR FUNCTIONS
/*
When a return statement is reached, the execution of the current function stops and control returns to the calling location.
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();
*/
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(-1, -2);
console.log(abTest(2, 1))

// 82-COUNTING CARDS
/*
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in 
the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, 
the player should bet high. When the count is zero or negative, the player should bet low.
Count Change	Cards
+1	        2, 3, 4, 5, 6
0	        7, 8, 9
-1	        10, 'J', 'Q', 'K', 'A'
*/
/*
// Solution 1
let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; // is the equivalent of count = count + 1
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--; // is the equivalent of count = count - 1
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(10))
*/

/*
// Solution 2
let count = 0;

function cc(card) {
    // Only change code below this line
    let letters = /[JQKA]/;

    if (card > 1 && card < 7) {
        count++; // is the equivalent of count = count + 1
    } else if (card == 10 || letters.test(card)) {
        count--; // is the equivalent of count = count - 1
    }

    if (count > 0) return count + " Bet";
    return count + " Hold";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(2))
*/

// 83-BUILD JAVASCRIPT OBJECTS
/*
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
 
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
*/
const myDog = {
    "name": "Bobby",
    "legs": 4,
    "tails": 1,
    "friends": ["a", "b"]
};

// 84-ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
/*
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
 
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
*/
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat; // .hat added
const shirtValue = testObj.shirt; // .shirt added

// 85-ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in 
its name, you will need to use bracket notation.
 
However, you can still use bracket notation on object properties without spaces.
*/
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj1["an entree"]; // ["an entree"] added  
const drinkValue = testObj1["the drink"]; // ["the drink"] added

// 86-ACCESSING OBJECT PROPERTIES WITH VARIABLES
/*
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating 
through an object's properties or when accessing a lookup table.
 
Here is an example of using a variable to access a property:
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
 
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.
 
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
const someObj = {
  propName: "John"
};
 
function propPrefix(str) {
  const s = "prop";
  return s + str;
}
 
const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.
 
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
*/
const testObj2 = {
    12: "namath",
    16: "montana",
    19: "unitas"
};
const playerNumber = 16; // 42 changed to 16
const player = testObj2[playerNumber]; // [playerNumber] added
// console.log(player)

// 87-UPDATING OBJECT PROPERTIES
/*
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot 
or bracket notation to update.
*/
const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog1.name = "Happy Coder"; // line added

// 88-ADD NEW PROPERTIES TO A JAVASCRIPT OBJECT
/*
You can add new properties to existing JavaScript objects the same way you would modify them.
*/
const myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog2.bark = "woof"; // line added

// 89-DELETE PROPERTIES FROM A JAVASCRIPT OBJECT
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog3.tails; // line added

// 90-USING OBJECTS FOR LOOKUPS
/*
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch 
statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
*/
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
phoneticLookup("charlie");

// 91-TESTING OBJECTS FOR PROPERTIES
/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if 
that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
*/
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"))

// 92-MANIPULATING COMPLEX OBJECTS
/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations 
of strings, numbers, booleans, arrays, functions, and objects.
*/
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "BJ",
        "title": "PM",
        "release_year": 1975,
        "formats": [
            "EF",
            "GH",
            "I9"
        ]
    } // object added to array
];

// 93-ACCESSING NESTED OBJECTS
/*
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
*/
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"]; // variable value added

// 94-ACCESSING NESTED ARRAYS
/*
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation 
can be chained to access nested arrays.
*/
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1]; // variable value changed

// 95-RECORD COLLECTION
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// 96-ITERATE WITH JAVASCRIPT WHILE LOOPS
/*
You can run the same code multiple times by using a loop.
 
The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
*/
const myArray8 = []; // code below this line added
let i = 0;
while (i < 6) {
    myArray8.unshift(i);
    i++;
}

// 97-ITERATE WITH JAVASCRIPT FOR LOOPS
/*
You can run the same code multiple times by using a loop.
 
The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
 
For loops are declared with three optional expressions separated by semicolons:
for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
 
The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
 
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false 
at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.
 
The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
 
In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as 
our final expression.
 
const ourArray = [];
for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
*/
const myArray9 = []; // code below this line added
for (let i = 1; i < 6; i++) {
    myArray9.push(i);
}

// 98-ITERATE ODD NUMBERS WITH A FOR LOOP
/*
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
*/
const myArray10 = []; // code below this line added
for (let i = 1; i < 10; i += 2) {
    myArray10.push(i);
}

// 99-COUNT BACKWARDS WITH A FOR LOOP
/*
A for loop can also count backwards, so long as we can define the right conditions.
 
In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression
*/
const myArray11 = [] // code below this line added
for (let i = 9; i > 0; i -= 2) {
    myArray11.push(i);
}

// 100-ITERATE THROUGH AN ARRAY WITH A FOR LOOP
/*
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of 
the array arr to the console:
 
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
 
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which 
stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, 
and the loop terminates because i < arr.length is false.
*/

const myArr1 = [2, 3, 4, 5, 6];
let total1 = 0;
for (let i = 0; i < myArr1.length; i++) {
    total1 += myArr1[i];
}
console.log(total1)

// 101-NESTING FOR LOOPS
/*
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
const arr = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array
*/
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))

// 102-ITERATE WITH JAVASCRIPT DO...WHILE LOOPS
/*
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the 
loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
const ourArray = []; // output [0, 1, 2, 3, 4]
let k = 0;
 
do {
    ourArray.push(k); // output 6
    k++; k is now 5
} while (k < 5);
 
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while 
different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that 
will run the code in the loop as 
long as i < 5:
const ourArray = []; // output []
let l = 5;
 
while (l < 5) {
  ourArray.push(l); // output 1
  l++; // l is now 5
}
 
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to 
false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and 
it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:
const ourArray = []; // output [5]
let m = 5;
 
do {
  ourArray.push(m); // output 2
  m++; // m is now 6
} while (m < 5);
 
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate,
so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition 
check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and 
are done. At the end of the above example, the value of ourArray is [5]. 
 
Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values 
to an array.
*/
const myArray12 = []; // output [10]
let n = 10;

do {
    myArray12.push(n); // output 2
    n++; // n equal 11
} while (n < 5);

// 103-REPLACE LOOPS USING RECURSION
/*
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: 
multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
} 
 
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. 
 
That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply 
returns the answer.
 
Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never 
finish executing.
*/
/*
function sum(arr, n) {    
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
*/

// 104-PROFILE LOOKUP
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"))

// 105-GENERATE RANDOM FRACTIONS WITH JAVASCRIPT
/*
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() 
can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return 
the value of the Math.random() function.
*/
function randomFraction() {
    return Math.random();
}
console.log(randomFraction())

// 106-GENERATE RANDOM WHOLE NUMBERS WITH JAVASCRIPT
/*
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

    Use Math.random() to generate a random decimal.
    Multiply that random decimal by 20.
    Use another function, Math.floor() to round the number down to its nearest whole number.

Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This 
technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down 
to the nearest whole number.
*/
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())

// 107-GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE
/*
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number 
that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.
code is doing:

Here's the formula we'll use. Take a moment to read it and try to understand what this 
Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange())
*/

// 108-USE THE PARSEINT FUNCTION
/*
The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");

The above function converts the string 007 to the integer 7. If the first character in the string can't be converted 
into a number, then it returns NaN.

function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");
console.log(convertToInteger("56"))
*/

// 109-USE THE PARSEINT FUNCTION WITH A RADIX
/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which 
specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

const a = parseInt("11", 2);

The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
*/
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");
console.log(convertToInteger("10011"))

// 110-USE THE CONDITIONAL (TERNARY) OPERATOR
/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
*/
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
console.log(checkEqual(1, 2))

// 111-USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS
/*
In the previous challenge, you used a single conditional operator. You can also chain them together to check for 
multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
*/
function checkSign(num) {
    return (num === 0) ? "zero"
        : (num > 0) ? "positive"
            : "negative";
}
checkSign(10);
console.log(checkSign(10))

// 112-USE RECURSION TO CREATE A COUNTDOWN
/*
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex 
function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when 
it no longer needs to call itself. It is a simple case where the return value is already known. There will also be 
a recursive call which executes the original function with different arguments. If the function is written correctly, 
eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. 
This function will need to accept an argument, n, representing the final number. Then it will need to call itself 
with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. 
This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into 
the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray
    }
}
console.log(countdown(5))

// 113-USE RECURSION TO CREATE A RANGE OF NUMBERS
/*
Continuing from the previous challenge, we provide you another opportunity to create a recursive function 
to solve a problem.
*/
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
};
console.log(rangeOfNumbers(2, 5))