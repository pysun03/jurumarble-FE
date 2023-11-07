let count = 2; 

function updateDisplay() {
    document.getElementById("count").textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    if (count > 1) {
        count--;
    }
    updateDisplay();
}

window.onload = function() {
    updateDisplay();
}
