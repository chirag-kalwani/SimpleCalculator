let screen = document.getElementById('screen');
let buttons = document.getElementsByTagName('Button');

// By using Screen KeyPad
for (let button of buttons) {
    button.addEventListener('click', () => {
        switch (button.innerHTML) {
            case '=': {
                try {
                    screen.value = eval(screen.value);
                } catch (e) {
                    alert("Invalid Input");
                }
                break;
            }
            case '×': {
                screen.value += '*';
                break;
            }
            case '÷': {
                screen.value += '/';
                break;
            }
            case '⌫': {
                screen.value = screen.value.slice(0, -1);
                break;
            }
            case 'C': {
                screen.value = '';
                break;
            }
            default: {
                screen.value += button.innerHTML;
            }
        }
    });
}


// By using Key-Board KeyPad 
let keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', ')', '(', 'Enter', 'Escape', 'Backspace', '.'];
document.onkeydown = function (e) {
    if (keys.includes(e.key)) {
        switch (e.key) {
            case ('Enter'): {
                try {
                    screen.value = eval(screen.value);
                } catch (e) {
                    alert("Invalid Input");
                }
                break;
            }
            case '*': {
                screen.value += '*';
                break;
            }
            case '/': {
                screen.value += '/';
                break;
            }
            case 'Backspace': {
                screen.value = screen.value.slice(0, -1);
                break;
            }
            case 'Escape': {
                screen.value = '';
                break;
            }
            default: {
                screen.value += e.key;
            }
        }
    }
}
