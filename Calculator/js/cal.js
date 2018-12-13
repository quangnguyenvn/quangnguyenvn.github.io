
// Need to improve: + JS cal special functions; long string

var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if(pushed == '=') {
    	
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if (pushed == 'AC') {
        inputLabel.innerHTML = '0';
    }
    
    //--------fix code funtion EXP
    else if (pushed == 'EXP') {

    	 inputLabel.innerHTML = Math.exp(inputLabel.innerHTML);
    	
    }
    //-----
    
    //--------fix code funtion EXP
    else if (pushed == 'π') {

    	 inputLabel.innerHTML = 3.141592653589793;
    	
    }
    //-----
    
        //--------fix code funtion LOG
    else if (pushed == 'LOG') {

    	 inputLabel.innerHTML = Math.log(inputLabel.innerHTML);
    	
    }
    //-----
    
    //--------fix code funtion root square
    else if (pushed == '√') {

    	 inputLabel.innerHTML = Math.sqrt(inputLabel.innerHTML);
    	
    }
    //-----
    
    //--------fix code funtion square
    
    else if (pushed == '(²)') {
    	 
    	 inputLabel.innerHTML = Math.pow(inputLabel.innerHTML, 2);
    	
    } 
    //-----
    
    else {
    	
        if(inputLabel.innerHTML == "0") {
        	if(pushed === ".") {
        		inputLabel.innerHTML += pushed;
        	}
        	else {
            inputLabel.innerHTML = pushed;
        }
        }
        else {
            inputLabel.innerHTML += pushed;
        }
    }
}

function doSqrtMath() {
	var inputNum1=document.inputLabel.result.value;
  	var result = Math.sqrt(inputNum1);
  	document.inputLabel.result.value = result;
	
}