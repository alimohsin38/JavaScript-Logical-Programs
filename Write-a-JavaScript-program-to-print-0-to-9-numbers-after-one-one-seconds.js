
for(var i=0; i<10; i++){
	setTimeout(function(){console.log(i);}, 1000);
}         //OutPut will be 10 times 10
          //It'll give the wrong output which is 10 to get the correct output please follow the below code...


for(var i=0; i<10; i++){
	(function (index){setTimeout(function(){console.log(index);}, 1000*i)})(i);
}         //OutPut will be 0 1 2 3 4 5 6 7 8 9


//Also we can do this with "setInterval" function. Below code is showing that how to be do it...
var counter = 0;
var idx = setInterval(function(){
		console.log(counter);
		counter++;
		if(counter >= 10){
			clearInterval(idx);
		}
	  },1000);     //OutPut will be 0 1 2 3 4 5 6 7 8 9

