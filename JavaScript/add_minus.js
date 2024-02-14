function updateValue(operation, increment, inputId, maxValue) {
    var numberInput = document.getElementById(inputId);
    var currentValue = parseInt(numberInput.value);
    
    if (operation === "add") {
        if (maxValue === undefined || currentValue + increment <= maxValue) {
        numberInput.value = currentValue + increment;
        }
    } else if (operation === "subtract" && currentValue - increment >= 0) {
        numberInput.value = currentValue - increment;
    }
}

function displayCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentDateElement.textContent = currentDate;
}

document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
});

// Call the function to display the current date when the page loads
displayCurrentDate();