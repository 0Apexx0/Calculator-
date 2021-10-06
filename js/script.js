var keypressed = document.getElementsByClassName('option');
var display = document.getElementById('display');;
// var operand1 = 0;
// var operand2 = null;
var operator = null;

for(var i = 0 ; i < keypressed.length ; i++ ){
    keypressed[i].addEventListener('click' , function(){
        var value = this.getAttribute('data-value');

        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText= '';
        }else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText= '';
        }else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText= '';
        }else if(value == '+/-'){
            display.innerText = '-' + display.innerText;
        }else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText= '';
        }else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent)/100;
            display.innerText= operand1;
        }
        else if(value == 'AC'){
            display.innerText = "";

        }else if(value == '.'){
            display.innerText += ".";

        }
        else{
            display.innerText += value;
        }

        if(value == '=' && operator == '+'){
            operand2 = parseFloat(display.textContent);
            
            var result = eval('operand1 + operand2')
            display.innerText= result;
        }
        if(value == '=' && operator == '-'){
            operand2 = parseFloat(display.textContent);
            
            var result = eval('operand1 - operand2')
            display.innerText= result;
        }
        if(value == '=' && operator == '*'){
            operand2 = parseFloat(display.textContent);
            
            var result = eval('operand1 * operand2')
            display.innerText= result;
        }
        if(value == '=' && operator == '/'){
            operand2 = parseFloat(display.textContent);
            
            var result = eval('operand1 / operand2')
            display.innerText= result;
        }
        if(value == '=' && operator == '%'){
            operand2 = parseFloat(display.textContent);
            
            var result = eval('operand1 % operand2')
            display.innerText= result;
        }
        
        

        
        
       
    });

}
