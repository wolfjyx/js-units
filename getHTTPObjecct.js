function getHTTPObject(){
	if(typeof XMLHttpRequest =='undefind'){
		XMLHttpRequest = function(){
			try{
				return new ActiveXObject('Msxml2.XMLHTTP.6.0');
			}catch(err){}
			try{
				return new ActiveXObject('Msxml2.XMLHTTP.3.0');
			}catch(err){}
			try{
				return new ActiveXObject('Msxml2.XMLHTTP');
			}catch(err){}
		}
	}
	return new XMLHttpRequest();
}