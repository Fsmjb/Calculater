$(document).ready(function() {
    var memory = 0;  
    var display = $("#display"); 
    var button = $('button[type="button"]');  
    
    button.each(function() {
        $(this).click(function() {
            var buttonValue = $(this).val(); 
            
            switch(buttonValue) {
                case '=':
                    try {
                        
                        var result = eval(display.val());
                        display.val(result);  
                    } catch (e) {
                        display.val('Error'); 
                    }
                    break;
                
                case 'AC':
                    display.val('');
                    memory = 0;  
                    break;
                
                case 'DE':
                    var currentVal = display.val();
                    display.val(currentVal.slice(0, currentVal.length - 1)); 
                    break;
                
                case 'MR':
                    display.val(memory); 
                    break;
                
                case 'M+':
                    memory += parseFloat(display.val()) || 0;  
                    display.val('');  
                    break;
                
                case 'sin':
                case 'cos':
                case 'tan':
                    var currentValue = parseFloat(display.val());
                    if (isNaN(currentValue)) {
                        display.val('Error');
                    } else {
                        switch(buttonValue) {
                            case 'sin':
                                display.val(Math.sin(currentValue).toString());
                                break;
                            case 'cos':
                                display.val(Math.cos(currentValue).toString());
                                break;
                            case 'tan':
                                display.val(Math.tan(currentValue).toString());
                                break;
                        }
                    }
                    break;
                
                case 'log':
                case 'ln':
                    try {
                        var currentValue = parseFloat(display.val());
                        if (currentValue > 0) {
                            display.val(
                                buttonValue === 'log' 
                                    ? Math.log10(currentValue).toString()  
                                    : Math.log(currentValue).toString()  
                            );
                        } else {
                            display.val('Error'); 
                        }
                    } catch (e) {
                        display.val('Error'); 
                    }
                    break;
                
                default:
                    display.val(display.val() + buttonValue);
                    break;
            }
        });
    });
});
