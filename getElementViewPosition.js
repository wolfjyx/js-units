function getElementPosition(element) {
	var left = element.offsetLeft,
		top = element.offsetTop,
		current = element.offsetParent
		scrollLeft=0,scrollTop=0;

	while (current !== null) {
		left += current.offsetLeft;
		top += current.offsetTop;
		current  = current.offsetParent;
	}	
　　　scrollLeft=document.documentElement.scrollLeft|| document.body.scrollLeft; 
	  scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	return {
		left: left-scrollLeft,
		top: top-scrollTop
	}
}