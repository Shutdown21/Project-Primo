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