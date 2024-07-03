document.getElementById('delayTimeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const delayTimeInput = document.getElementById('delayTime');
    const delayTimeValue = parseFloat(delayTimeInput.value);

    if (isNaN(delayTimeValue) || delayTimeValue < 0 || delayTimeValue > 5) {
        alert('Please enter a valid delay time between 0 and 5 seconds.');
    } else {
        // Save the delay time to localStorage
        localStorage.setItem('delayTime', delayTimeValue);
        console.log('Delay time set to:', delayTimeValue, 'seconds');
        // Add your logic to handle the delay time value here
    }
});

document.getElementById('sizeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const sizeInput = document.getElementById('size');
    const sizeInputValue = parseFloat(sizeInput.value);

    if (isNaN(sizeInputValue) || sizeInputValue < 0 || sizeInputValue > 10000) {
        alert('Please enter a valid size value between 1 and 10000.');
    } else {
        // Save the delay time to localStorage
        localStorage.setItem('size', sizeInputValue);
        console.log('Size set to:', sizeInputValue);
        // Add your logic to handle the delay time value here
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const delayTime = localStorage.getItem('delayTime');
    if (delayTime !== null) {
        document.getElementById('delayTime').value = delayTime;
    }

    const size = localStorage.getItem('size');
    if (size !== null) {
        document.getElementById('size').value = size;
    }
});