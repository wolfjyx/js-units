function hasPlugin(name) {
    name = name.toLowerCase();
    for(var i=0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf((name))>-1){
            return true;
        }
    }
    return false;
}

function hasIEPlugin(name) {
    try {
        new ActiveXObject(name);
        return true;
    }catch (ex){
        return false;
    }

}

function hasFlash() {
    var result = hasPlugin('Flash');
    if(!result){
        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash")
    }
    return result;
}

function hasQuickTime() {
    var result = hasPlugin('QuickTime');
    if(!result){
        result = hasIEPlugin("QuickTime.QuickTime")
    }
    return result;
}