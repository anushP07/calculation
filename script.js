
document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const invoicePrice = parseFloat(document.getElementById("invoicePrice").value);
    const baseTaxRate = 0.08; // 8% for vehicles below Rs 10 lakh
    const baseTax = baseTaxRate * invoicePrice;
    const motorVehicleTax = (baseTax * 1.25 * 2) / 15;

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
