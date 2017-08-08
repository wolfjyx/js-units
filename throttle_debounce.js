function throttle(func,wait,mustRun,context) {
        var timeout,
            startTime = new Date();
        return function () {
            var self = context || this,
                arg = arguments,
                currTime = new Date();
            clearTimeout(timeout);
            if(currTime - startTime >= mustRun){
                func.apply(self,arg);
                startTime = currTime;
            }else{
                timeout = setTimeout(func,wait)
            }
        }
}

function debounce(fun,wait,immediate,context) {
        var timeout;
        return function () {
            var self = context || this,
                arg = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(self, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(self, args);
        }
}