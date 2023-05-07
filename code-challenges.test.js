// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// ***********************************************************************************************************************
/*
INPUT: NUMBER > 2 && there are two variables, so there should be two expect statements
OUTPUT: and array that length is the size its input containing the numbers of the fibinachi sequence (n1,n2, n1+n2, n3+n2, n4+n3...)
METHODS: using methods that alther number data types.
there is gonna need to be the formula: fib[i] = fib[i-1] + fib[i-2];  where n>1
*/
// ***************************************************************************************************************************


// a) Create a ***test*** with expect statements for each of the variables provided.
/* SKELOTON: 
Describe( `My Function` , ( parameter ) => {
  it ( " what function Does", ()
  expect(MyFunction(variable)).toEqual(["what to expect"]))
})
describe(`myFib`,  () => {
    it(`takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.`, () => {
      const fibLength1 = 6
      const fibLength2 = 10
      expect(myFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
      expect(myFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    })
  });

  ReferenceError: fibSeq is not defined ---->  FAIL  ./code-challenges.test.js
  fibSeq

  

// b) Create the function that makes the test pass.
*
describe(`fibSeq`,  () => {
  it(`takes in a number thats greater than 2, and returns an array thats length contains the numbers of the Fibonacci sequence equal to the input.`, () => {
    const fibLength1 = 6
    const fibLength2 = 10
    expect(fibSeq(fibLength1)).toEqual([ 1 , 1 , 2 , 3 , 5 , 8 ]);
    expect(fibSeq(fibLength2)).toEqual([ 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 ]);
  })
})

const fibSeq = (length) => {
  let fib = [1,1];
  for (let i=2 ; i<length ; i++) {
    fib[i] = fib[i-1]+fib[i-2]
  }
  return fib;
}

// console.log(fibSeq(fibLength1)) // OUTPUT: [ 1 , 1 , 2 , 3 , 5 , 8 ]
// console.log(fibSeq(fibLength2)) // OUTPUT: [ 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21, 34 , 55 ]

// PASS  ./code-challenges.test.js fibSeq
*/
// ********************************************************************************************************************************




// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// ********************************************************************************************************************************
/*
INPUT: TAKES IN AN OBJECT
OUTPUT: RETURNS AN ARRAY OF VALUES SORTED FROM LEAST TO GREATEST
METHOD: TO SORT THE ARRAY OF VALUES WE CAN USE A BUILT-IN-METHOD .SORT(). WERE GONNA HAVE TO PROVIDE THE MATH FOR THE PROGRAM TO UNDERSTAND THE INTENT. ((value1,value2) => value1-value2). Only going to need the value from the key:value pair. 
*/

// ********************************************************************************************************************************


// a) Create a test with expect statements for each of the variables provided.
/*
describe( `sortedObjs` , ( parameter ) => {
  it ( " turn the object into a sorted array of values from smallest to larges", () => { 
  const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
expect(sortedObjs(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
expect(sortedObjs(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
})})

// ReferenceError: sortedObjs is not defined  ---->  FAIL  ./code-challenges.test.js
// sortedObjs



// b) Create the function that makes the test pass.


describe( `sortedObjs` , ( parameter ) => {
  it ( " turn the object into a sorted array of values from smallest to larges", () => { 
  const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
expect(sortedObjs(studyMinutesWeek1)).toEqual( [15, 15, 20, 30, 30, 60, 90] );
expect(sortedObjs(studyMinutesWeek2)).toEqual( [10, 15, 20, 45, 60, 65, 100] );
})})

const sortedObjs = (obj) => {
  var numVal = Object.values(obj);
  return numVal.sort((a , b) => a - b)
}


console.log(sortedObjs(studyMinutesWeek1)) OUTPUT: [ 15 , 15 , 20 , 30 , 30 , 60 , 90 ]
console.log(sortedObjs(studyMinutesWeek2)) OUTPUT:[ 10 , 15 ,  20 , 45 , 60 , 65 , 100]

PASS  ./code-challenges.test.js
sortedObjs
*/
// ********************************************************************************************************************************

/*

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
*/
// ********************************************************************************************************************************
/*
INPUT: TAKES IN AN ARRAY 
OUTPUT: RETURNS AN ARRAY OF THE ACCUMULATING SUM, AN EMPTY ARRAY SHOULD RETURN AN EMPTY ARRAY
METHODS: ACCUMULATING SUM REFERENCES TO SOME SORT OF MATH ((A,B) => A + B). ITERATION THROUGH AN ARRAY OF VALUES NEEDS TO OCCUR. 
*/
// ********************************************************************************************************************************
/*
 a) Create a test with expect statements for each of the variables provided.

describe(`acSum`,  () => {
  it(`RETURNS AN ARRAY OF THE ACCUMULATING SUM, AN EMPTY ARRAY SHOULD RETURN AN EMPTY ARRAY`, () => {
    const accountTransactions1 = [ 100 , -17 , -23 , -9 ]
    const accountTransactions2 = [ 250 , -89 , 100 , -96 ]
    const accountTransactions3 = [ ]
    expect(acSum(accountTransactions1)).toEqual([ 100 , -17 , -23 , -9 ]);
    expect(acSum(accountTransactions2)).toEqual([ 250 , -89 , 100 , -96 ]);
    expect(acSum(accountTransactions3)).toEqual([  ]);

  })
})

ReferenceError: acSum is not defined ---->  FAIL  ./code-challenges.test.js
acSum


// b) Create the function that makes the test pass.


describe(`acSum`,  (arr) => {
  it(`RETURNS AN ARRAY OF THE ACCUMULATING SUM, AN EMPTY ARRAY SHOULD RETURN AN EMPTY ARRAY`, () => {
    const accountTransactions1 = [ 100 , -17 , -23 , -9 ]
    const accountTransactions2 = [ 250 , -89 , 100 , -96 ]
    const accountTransactions3 = [ ]
    expect(acSum(accountTransactions1)).toEqual([ 100 , -17 , -23 , -9 ]);
    expect(acSum(accountTransactions2)).toEqual([ 250 , -89 , 100 , -96 ]);
    expect(acSum(accountTransactions3)).toEqual([  ]);

  })
})

const acSum = (arr) => {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}
  
  console.log(acSum(accountTransactions1)) OUTPUT: [ 100 , 83 , 60 , 51 ]
  console.log(acSum(accountTransactions2)) OUTPUT: [ 250 , 161 , 261 , 165 ]
  console.log(acSum(accountTransactions3)) OUTPUT: [ ]
  */