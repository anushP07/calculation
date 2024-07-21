function calculateTax() {
    let invoicePrice = document.getElementById('invoicePrice').value;
    if (invoicePrice && invoicePrice > 0) {
        let baseTaxRate = 0.08; // 8% for vehicles below Rs 10 lakh
        let baseTax = baseTaxRate * invoicePrice;
        let motorVehicleTax = (baseTax * 1.25 * 2) / 15;
        let roundedTax = motorVehicleTax.toFixed(2);

        document.getElementById('result').innerHTML = `For a vehicle with an invoice price of Rs. ${invoicePrice}, the BH-Series motor vehicle tax is Rs. ${roundedTax} for every two years.`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid invoice price.';
    }
}
