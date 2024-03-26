function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function negate() {
    var display = document.getElementById('display');
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function calculate() {
    var display = document.getElementById('display');
    var history = document.getElementById('history');
    try {
        var result = eval(display.value);
        history.innerText = display.value + ' = ' + result;
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}