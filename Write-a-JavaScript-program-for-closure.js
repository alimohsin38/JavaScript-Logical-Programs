
// We Use the closure mechanism to localize JavaScript variable's.

var closure = (function (){
  var count=0;
  return function(){return count+=1;};
})();
closure();
closure();
closure();          // OutPut will be 3
