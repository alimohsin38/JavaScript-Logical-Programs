function divide(a, b, callBack){
	callBack(a/b);
};
divide(10, 5, function(result){console.log("My result is : " + result);});   // CallBack function

//OR

function divide(a, b, callBack){
	callBack(a/b);
};
function callBackTest(result){
	console.log("My result is : " + result);
};
divide(15, 5, callBackTest);  // CallBack function

//OR

(function(){
    setTimeout(function(){console.log("Welcome In The JavaScript World Environment !!")}, 1000);
})();     // SelfInvoking Function

//OR

var arr = [8, 6, 0, 55, 2, 67];
function descendingSort(a, b){return b-a}
arr.sort(descendingSort);      // CallBack Function

//OR

var arr = [8, 6, 0, 55, 2, 67];
var descendingSort = (a, b)=>{return b-a}  // ECMA6 function declaration. Here "()=>{}" = "function(){}"
arr.sort(descendingSort);      // CallBack Function


