const display = document.querySelector('.display');
const keys = document.querySelectorAll('.button');

keys.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.textContent = eval(display.textContent);
            } 
            
            catch (error) {
                display.textContent = 'Error';
            }
        } 
        
        else if (button.textContent === 'C') {
            display.textContent = '0';
        } 
        
        else {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            } 
            
            else {
                display.textContent += button.textContent;
            }
        }
    });
});

  