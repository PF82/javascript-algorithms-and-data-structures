// 1-Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(myRegex.test(myString))

// 2-Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);

console.log(result1)

// 3-Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);

console.log(result2)

// 4-Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString);

console.log(result3)

// 5-Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line

console.log(result4)

// 6-Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

console.log(result5)

// 7-Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result6 = unRegex.test(exampleStr);

console.log(result6)

// 8-Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample.match(vowelRegex); // Change this line

console.log(result7)

// 9-Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample1.match(alphabetRegex); // Change this line

console.log(result8)

// 10-Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/ig; // Change this line
let result9 = quoteSample2.match(myRegex1); // Change this line

console.log(result9)

// 11-Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou^0-9]/gi; // Change this line
let result10 = quoteSample3.match(myRegex2); // Change this line

console.log(result10)

// 12-Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result11 = difficultSpelling.match(myRegex3);

console.log(result11)

// 13-Match Characters that Occur Zero or More Times
/*
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
/*
let result12 = chewieQuote.match(chewieRegex);

console.log(result12)
*/

// 14-Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result13 = text.match(myRegex4);

console.log(result13)

// 15-Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line

console.log(reCriminals)

// 16-Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result14 = calRegex.test(rickyAndCal);

console.log(result14)

// 17-Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

console.log(result15)

// 18-Match All Letters and Numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result16 = quoteSample4.match(alphabetRegexV2).length;

console.log(result16)

// 19-Match Everything But Letters and Numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample5.match(nonAlphabetRegex).length;

console.log(result17)

// 20-Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result18 = movieName.match(numRegex).length;

console.log(result18)

// 21-Match All Non-Numbers
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result19 = movieName.match(noNumRegex).length;

console.log(result19)

// 22-Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result20 = userCheck.test(username);

console.log(result20)

// 23-Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result21 = sample.match(countWhiteSpace);

console.log(result21)

// 24-Match Non-Whitespace Characters
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result22 = sample1.match(countNonWhiteSpace);

console.log(result22)

// 25-Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result23 = ohRegex.test(ohStr);

console.log(result23)

// 26-Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result24 = haRegex.test(haStr);

console.log(result24)

// 27-Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result25 = timRegex.test(timStr);

console.log(result25)

// 28-Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result26 = favRegex.test(favWord);

console.log(result26)

// 29-Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result27 = pwRegex.test(sampleWord);

console.log(result27)

// 30-Check For Mixed Grouping of Characters
let myString2 = "Eleanor Roosevelt";
let myRegex5 = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result28 = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result28)

// 31-Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result29 = reRegex.test(repeatNum);

console.log(result29)

// 32-Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result30 = str.replace(fixRegex, replaceText);

console.log(result30)

// 33-Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result31 = hello.replace(wsRegex, ""); // Change this line

console.log(result31)