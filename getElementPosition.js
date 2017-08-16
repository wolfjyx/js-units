function getElementPosition(element) {
	var left = element.offsetLeft,
		top = element.offsetTop,
		current = element.offsetParent;

	while (current !== null) {
		left += (current.offsetLeft+current.clientLeft);
		top += (current.offsetTop  + current.clientTop);
		current  = current.offsetParent;
	}	
	return {
		left: left,
		top: top
	}
}