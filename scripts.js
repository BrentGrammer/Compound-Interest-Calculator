
//prompts gather user input for calculation:
//(globally declared variables:)

var startSum = prompt("Enter Starting Amount:","");
var r = prompt("Enter the expected return rate per year:","(Enter % as a whole number)");
var t = prompt("Calculate for How Many Years?","");

//convert input strings to numbers:
var startNum = parseInt(startSum, 10);
var rNum = parseInt(r, 10);
var tNum = parseInt(t, 10);
console.log("startsum:",startNum,typeof startNum,"rate:", rNum,typeof rNum, "time:",tNum,typeof tNum);

//convert the rate input to a decimal for arithmetic:
var rDec = rNum / 100;
console.log("converted rate:", rDec,typeof rDec);

//create array to loop through for calculations
 var a = [];
 //put starting value into the first key of the array index
 a.push(startNum);

 console.log("array a with start value:",a);  //for debugging
 console.log("current time value:",tNum);     //for debugging


//variables to use for calculation: startNum (starting amount), rDec (rate in decimal), tNum (), a (array for return values)
//note: the starting value entered by user (startSum/startNum) is already in the first key index of the array 'a' for starting the caclculations

//the following calculate function runs when user clicks calculate button:
function calculate() {

       for (i = 0; i < tNum; i++) {
           var x = a[i] + (a[i] * rDec);
           a.push(x);
       }
    
        console.log("length of array a:",a.length);  //for debugging.

       //when this is done, a[i] will have 1 more key than the tNum the user entered for number of years (the starting amount + 1 amount for each year of interest earned; 1 + tNum)

       //create new array to hold sum strings with 2 decimals.  Note: this is created outside of the for loop so that it is not recreated each time, erasing the previously inserted values.

        var cleanNum = [];

        for (i = 0; i < a.length; i++) {
            //create variable for each index to use with toFixed function:
             var num = a[i];
            //convert each number in index to a string with 2 decimals:
             var y = num.toFixed(2);
            //push each value into the new array (cleanNum) to hold final sums:
            cleanNum.push(y);
            
        }
    
        console.log("array with cleanNum values:",cleanNum); //for debugging.

//print out the results from the array for each year.

document.getElementById("printout").innerHTML = cleanNum;
}
