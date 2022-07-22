

function reverse(arr) {
  var temparr = []
var i = arr.length - 1
  while(i >= 0){
    temparr.push(arr[i]);
    i--
  }
  console.log(temparr);
  return temparr;
}

var arr = [1,2,3,4,5];
reverse(arr);
