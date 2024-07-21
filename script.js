document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("taxForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Debug: Check if the form is being submitted
        console.log("Form submitted");

        const invoicePrice = parseFloat(document.getElementById("invoicePrice").value);
        
        // Debug: Check the input value
        console.log("Invoice Price:", invoicePrice);

        if (isNaN(invoicePrice) || invoicePrice <= 0) {
            alert("Please enter a valid invoice price.");
            return;
        }

        const baseTaxRate = 0.08; // 8% for vehicles below Rs 10 lakh
        const baseTax = baseTaxRate * invoicePrice;

        // Debug: Check the base tax calculation
        console.log("Base Tax:", baseTax);

        const motorVehicleTax = (baseTax * 1.25 * 2) / 15;

        // Debug: Check the motor vehicle tax calculation
        console.log("Motor Vehicle Tax:", motorVehicleTax);

        document.getElementById("taxAmount").innerText = `BH-Series Motor Vehicle Tax for Two Years: Rs. ${motorVehicleTax.toFixed(2)}`;

        const explanation = `
            For a vehicle with an invoice price of Rs. ${invoicePrice}, the base tax rate is 8%. 
            The base tax amount is calculated as:
            Base Tax = 8% of Rs. ${invoicePrice} = Rs. ${baseTax.toFixed(2)}.
            Using the BH-Series formula:
            Motor Vehicle Tax for Two Years = (Base Tax * 1.25 * 2) / 15
            = (Rs. ${baseTax.toFixed(2)} * 1.25 * 2) / 15
            = Rs. ${motorVehicleTax.toFixed(2)}.
        `;
        document.getElementById("explanation").innerText = explanation;

        document.getElementById("result").style.display = "block";
    });
});
