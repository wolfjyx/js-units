function fn1() {
  var arr = [];
  for (var i = 0, len = arguments.length; i < len; i++)
    arr[i] = arguments[i];
  return arr
}

function fn2(){
	return Array.prototype.slice.call(arguments);
}
function fn3(){
	return [].slice.call(arguments);
}

function fn4(){
	Array.from(arguments)
}


function nodeListToArray(nodes){
  var arr, length;
  try {
    arr = [].slice.call(nodes);
    return arr;
  } catch(err){
    arr = [];
    length = nodes.length;

    for(var i = 0; i < length; i++){
       arr.push(nodes[i]);
     }  

    return arr;
  }
} 
