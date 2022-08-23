
const tank = document.getElementById('numberTank');
const gasC = document.getElementById('gas');
const alcoholC = document.getElementById('alcohol');

const button = document.getElementById('buttonTank')
let fuelTank;
let gas;
let alcohol;


button.addEventListener('click', clickButton)

function clickButton() {
    let fuelTank = parseInt(tank.value);
    let gas = parseInt(gasC.value);
    let alcohol = parseInt(alcoholC.value);

    if (Number(fuelTank) && Number(gas) && Number(alcohol)) {
        document.getElementById("text0").innerHTML = `Tanque: ${fuelTank}, Recorrido Gasolina: ${gas}, Recorrido Alcohol: ${alcohol}`;
    } else {
        alert("Ingrese un número valido");
        if (tank.value != Number) tank.value = "40";
        if (gasC.value != Number) gasC.value = "480";
        if (alcoholC.value != Number) alcoholC.value = "300";

    }

    const alcoholConsume = gas / fuelTank;
    const gasConsume = alcohol / fuelTank;

    document.getElementById("text1").innerHTML = `La eficiencia del carro usando gasolina es ${alcoholConsume.toFixed(1)} km/L`;
    document.getElementById("text2").innerHTML = `La eficiencia del carro usando alcohol es ${gasConsume.toFixed(1)} km/L`;

}

