const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error", error;
        console.log(error);
    }
}

document.addEventListener('keydown', function (e) {
    // anders zet het de input erbij
    e.preventDefault();
    // key variabele is de input van de gebruiker
    const key = e.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    // switch voor de operators
    switch (e.key) {
        case 'Enter':
            calculate();
            break;
        case '+':
            appendToDisplay('+');
            break;
        case '-':
            appendToDisplay('-');
            break;
        case '*':
            appendToDisplay('*');
            break;
        case '/':
            appendToDisplay('/');
            break;
        case 'c':
            clearDisplay();
            break;
    }
})  