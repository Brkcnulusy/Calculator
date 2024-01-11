let cA = document.getElementById("clear-all");
let cL = document.getElementById("clear-lastChild");
let rD = document.getElementById("remainderless-division");
let dot = document.getElementById("dot");
let calculate = document.getElementById("calculate");

let operators = document.querySelectorAll(".operators");
let numbers = document.querySelectorAll(".num");

let result = document.getElementById("result");
let display = document.getElementById("display");

let selectedOperators = '';
let leftPart = "";
let rightPart = "";

for(i = 0; i < numbers.length; i++){
    
    numbers[i].addEventListener("click",function(){
        result.innerHTML += this.value;
        if(result.textContent.substring(0,1) == '0'){
            result.innerHTML = "";
            
        }
        if(selectedOperators == ""){
            leftPart += this.value;
            
        }
        else {
            rightPart += this.value;
            
        }   
        
    });
}

for(i = 0; i < operators.length; i++){
    
    operators[i].addEventListener("click",function(){
        result.innerHTML += this.value;
        selectedOperators = this.value
        if(selectedOperators == '+'){
            display.innerHTML = Number(leftPart) + "+";
            result.innerHTML = "";
        }
        else if (selectedOperators == '-'){
            display.innerHTML = Number(leftPart) + "-";
            result.innerHTML = "";
        }
        else if (selectedOperators == '*'){
            display.innerHTML = Number(leftPart) + "x";
            result.innerHTML = "";
        }
        else if (selectedOperators == '/'){
            display.innerHTML = Number(leftPart) + "/";
            result.innerHTML = "";
        }
    
    });
}  
    calculate.addEventListener("click",function(){
        
        if(selectedOperators == '+'){ 
            var sonuc = Number(leftPart) + Number(rightPart);
            leftPart = sonuc;
            result.innerHTML = sonuc;
            rightPart = "";
            display.innerHTML = "";
        }
        else if(selectedOperators == '-'){
            var sonuc = Number(leftPart) - Number(rightPart);
            leftPart = sonuc;
            result.innerHTML = sonuc;
            rightPart = "";
            display.innerHTML = "";
        }
        else if(selectedOperators == '*'){
            var sonuc = Number(leftPart) * Number(rightPart);
            leftPart = sonuc;
            result.innerHTML = sonuc;
            rightPart = "";
            display.innerHTML = "";
        }
        else if(selectedOperators == '/'){
            var sonuc = Number(leftPart) / Number(rightPart);
            leftPart = sonuc;
            result.innerHTML = sonuc;
            rightPart = "";
            display.innerHTML = "";
        }
        
    });
    rD.addEventListener("click",function(){
        result.innerHTML = Number(leftPart) / 100;
    });
    cA.addEventListener("click",function(){
        result.innerHTML = "";
        leftPart = "";
        rightPart = "";
        selectedOperators = "";
        yazi = ""; 
        display.innerHTML = "";
    });
    
    cL.addEventListener("click",function(){
        var sec = result.textContent.substring(0,result.textContent.length-1);
        result.innerHTML = sec;
    });
    