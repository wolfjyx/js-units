function unique1(a){
	var res =[];
	for(var i=0,len=a.length;i<len;i++){
		for(j=0,jLen=res.length;j<jLen;j++){
			if(res[j]===a[i])
				break;
		}
		if(j===jLen)res.push(a[i]);
	}
	return res
}

function unique2(a){
	var res = [];
  	for (var i = 0, len = a.length; i < len; i++) {
    	var item = a[i];
    	(res.indexOf(item) === -1) && res.push(item);
  	}
  	return res;
}

function unique3(a){
	var res = a.filter(function(item, index, array) {
    	return array.indexOf(item) === index;
  	});
  	return res;
}

function unique4(a){
	var res = [];
	for(var i=0,len=a.length;i<len;i++){
		for(var j=i+1;j<len;j++){
			if(a[i]===a[j]){
				console.log(a[i],a[j],i,j)
				j=++i;
			}
		}
		res.push(a[i]);
	}
	return res;
}


function unique5(a){
	return a.concat().sort().filter(function(item,pos,ary){
		return !pos || item !=ary[pos-1]
	})
}

function unique6(a){
	var seen={};
	return a.filter(function(item){
		return seen.hasOwnProperty(item)?false:(seen[item]=true)
	})
}
console.log(unique5([1,2,3,2,2,3]))

function unique7(a){
	var ret = [];
	var hash ={};
	for(var i=0,len=a.length;i<len;i++){
		var item = a[i];
		var key = typeof(item)+item;
		if(hash[key]!==1){
			ret.push(item);
			hash[key]=1;
		}
	}
	return ret
}


function unique(a){
	return Array.from(new Set(a))
}