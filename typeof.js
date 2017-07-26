

//判断是否为数组
function isArray(a){
	Array.isArray ? Array.isArray(a) : Object.prototype.toString.call(a) === '[object Array]';
}

//判断对象

function isObject(obj){
	var type = typeof obj;
	return type === 'function' || type === 'object' && !!obj;
}

//判断其他
var $type = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'];

$type.forEach(function(name){
	 this['is'+name] = function(obj){
		return toString.call(obj) === '[object '+ name+']';
	}
})

//判断一个元素是否是 DOM 元素
function isElement(obj){
	return !!(obj && obj.nodeType === 1);
}

//判断是否为NaN
function isNaN(obj){
	return isNumber(obj) && obj !== +obj
}
//判断是否为boolean
function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

function isFinite (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
 };
