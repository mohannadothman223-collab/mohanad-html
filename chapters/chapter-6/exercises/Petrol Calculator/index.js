// JavaScript for Petrol Calculator functionality

// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const costPerLiterInput = document.getElementById('costPerLiter');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostDisplay = document.getElementById('totalCost');
    
    // Function to calculate the total cost
    function calculateTotalCost() {
        // Get the values from the input fields
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const liters = parseFloat(litersInput.value);
        
        // Check if the inputs are valid numbers
        if (isNaN(costPerLiter) || isNaN(liters)) {
            alert('Please enter valid numbers for cost and liters.');
            return;
        }
        
        // Calculate the total cost
        const totalCost = costPerLiter * liters;
        
        // Display the total cost formatted to 2 decimal places
        totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
    }
    
    // Add event listener to the calculate button
    calculateBtn.addEventListener('click', calculateTotalCost);
});