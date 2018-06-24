// Local time - Big_clock
function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes(); 
        s = 6 * getSeconds(); 
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000); 
    }
}

window.onload = moveHands(); 

// NY time - Second_clock

function moveHandsNY() {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = -4;   
    let newYork = utc + (3600000*offset);

    with(new Date(newYork)) {
        h = 30 * (getHours() % 12 + getMinutes() / 60); 
        m = 6 * getMinutes(); 
        s = 6 * getSeconds();
        document.getElementById('second_seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('second_minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('second_hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHandsNY, 1000);
    }
}

window.onload = moveHandsNY();

// TOKYO time - third_clock

function moveHandsTYO() {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 9;   
    let tokyo = utc + (3600000*offset);

    with(new Date(tokyo)) {
        h = 30 * (getHours() % 12 + getMinutes() / 60); 
        m = 6 * getMinutes();
        s = 6 * getSeconds(); 
        document.getElementById('third_seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('third_minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('third_hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHandsTYO, 1000); 
    }
}

window.onload = moveHandsTYO(); 


// BERLIN time - fourth_clock

function moveHandsBER() {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 2;   
    let berlin = utc + (3600000*offset);
    
    with(new Date(berlin)) {
        h = 30 * (getHours() % 12 + getMinutes() / 60); 
        m = 6 * getMinutes();
        s = 6 * getSeconds(); 
        document.getElementById('fourth_seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('fourth_minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('fourth_hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHandsBER, 1000); 
    }
}

window.onload = moveHandsBER(); 