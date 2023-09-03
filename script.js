function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const resultFahrenheit = (celsiusInput * 9/5) + 32;
    const resultKelvin = parseFloat(celsiusInput) + 273.15;

    document.getElementById('resultFahrenheit').textContent = resultFahrenheit.toFixed(2);
    document.getElementById('resultKelvin').textContent = resultKelvin.toFixed(2);
}
