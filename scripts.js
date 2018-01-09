
//prompts gather user input for calculation:
//(globally declared variables:)

var startSum = prompt("Enter Starting Amount:","");
var r = prompt("Enter the expected return rate per year:","(Enter % as a whole number)");
var t = prompt("Calculate for How Many Years?","");

//convert input strings to numbers:
var startNum = parseInt(startSum, 10);
var rNum = parseInt(r, 10);
var tNum = parseInt(t, 10);
console.log(startNum,typeof startNum,rNum,typeof rNum,tNum,typeof tNum);

//convert the rate input to a decimal for arithmetic:
var rDec = rNum / 100;
console.log(rDec,typeof rDec);

//create array to loop through for calculations
 var a = [];
 //put starting value into the first key of the array index
 a.push(startNum);
 console.log(a);


//variables to use for calculation: startNum (starting amount), rDec (rate in decimal), tNum (), a (array for return values)
//note: the starting value entered by user (startSum/startNum) is already in the first key index of the array 'a' for starting the caclculations

//the following calculate function runs when user clicks calculate button:
function calculate(startNum){

       for (i = 0; i < tNum; i++) {

          var x = a[i] + (a[i] * rDec);
          //strip number to 2 decimal values:
          a.push(x);
        }

        for (i = 0; i < a.length; i++){
             a[i].toFixed(2);
             console.log(a[i]);
        }

//print out the results from the array for each Years

document.getElementById("printout").innerHTML = a;
}
