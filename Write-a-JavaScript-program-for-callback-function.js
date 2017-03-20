(function(){
    setTimeout(function(){console.log("Welcome In The JavaScript World Environment !!")}, 1000);
})();

//OR

var arr = [8, 6, 0, 55, 2, 67];
function descendingSort(a, b){return b-a}
arr.sort(descendingSort);      // CallBack Function

//OR

var arr = [8, 6, 0, 55, 2, 67];
var descendingSort = (a, b)=>{return b-a}  // ECMA6 function declaration. Here "()=>{}" = "function(){}"
arr.sort(descendingSort);      // CallBack Function
