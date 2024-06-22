function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const power = parseFloat(document.getElementById('power').value);

    let resultVoltage = '';
    let resultCurrent = '';
    let resultResistance = '';
    let resultPower = '';

    if (!isNaN(voltage) && !isNaN(current)) {
        resultPower = `Power (P) = ${voltage * current} watts`;
        resultResistance = `Resistance (R) = ${voltage / current} ohms`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        resultCurrent = `Current (I) = ${voltage / resistance} amps`;
        resultPower = `Power (P) = ${Math.pow(voltage, 2) / resistance} watts`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        resultVoltage = `Voltage (V) = ${current * resistance} volts`;
        resultPower = `Power (P) = ${Math.pow(current, 2) * resistance} watts`;
    } else if (!isNaN(voltage) && !isNaN(power)) {
        resultCurrent = `Current (I) = ${power / voltage} amps`;
        resultResistance = `Resistance (R) = ${Math.pow(voltage, 2) / power} ohms`;
    } else if (!isNaN(current) && !isNaN(power)) {
        resultVoltage = `Voltage (V) = ${power / current} volts`;
        resultResistance = `Resistance (R) = ${power / Math.pow(current, 2)} ohms`;
    } else if (!isNaN(resistance) && !isNaN(power)) {
        resultCurrent = `Current (I) = ${Math.sqrt(power / resistance)} amps`;
        resultVoltage = `Voltage (V) = ${Math.sqrt(power * resistance)} volts`;
    } else {
        alert('Please provide at least two inputs.');
    }

    document.getElementById('result-voltage').innerText = resultVoltage;
    document.getElementById('result-current').innerText = resultCurrent;
    document.getElementById('result-resistance').innerText = resultResistance;
    document.getElementById('result-power').innerText = resultPower;
}
