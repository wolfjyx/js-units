function shuffle(a){
	var arr= [];
	while(a.length){
		var index = ~~(Math.random() * a.length);
		arr.push(a[index]);
		a.splice(index,1);
	}
	return arr;
}

function shuffle(a){
	return a.concat().sort().function(a,b){
		return Math.random()-0.5;
	}
}

function shuffle(a){
	var arr = a.concat();
	for(var i=arr.length;i--;){
		var j = Math.floor(Math.random()*(i+1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp; 
	}
	return arr;
}