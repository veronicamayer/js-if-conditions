/* Aufgabe 1 */
const weatherQuality = document.getElementById('weatherQuality');
const weatherOutput = document.querySelector("p");

weatherQuality.addEventListener("input", function(weather) {
    const input = weatherQuality.value;
    console.log(weatherQuality.value);

    let output = "";
    weatherOutput.innerHTML = "Wetter Qualität: " + output;

    if (input <= 10 && input >= 8) {
        output = "super";
    } else if (input <= 7 && input >= 6) {
        output = "gut";
    } else if (input <= 5 && input >= 3) {
        output = "okay";
    } else if (input <= 2 && input >= 0) {
        output = "schlecht";
    }

    weatherOutput.innerHTML += output;
});

/* Aufgabe 2 */
const größeJ = parseInt(document.getElementById('größeJ').innerHTML);
console.log(größeJ);
const alterJ = parseInt(document.getElementById('alterJ').innerHTML);
console.log(alterJ);
const punkteJspan = document.getElementById('punkteJ');

const größeM = parseInt(document.getElementById('größeM').innerHTML);
console.log(größeM);
const alterM = parseInt(document.getElementById('alterM').innerHTML);
console.log(alterM);
const punkteMspan = document.getElementById('punkteM');

const ergebnis = document.getElementById('ergebnis');


function calculate() {
    let punkteJ = größeJ * 5 + alterJ;
    console.log(punkteJ);
    punkteJspan.innerHTML = punkteJ;

    let punkteM = größeM * 5 + alterM;
    console.log(punkteM);
    punkteMspan.innerHTML = punkteM;

    if (punkteJ > punkteM) {
        ergebnis.innerHTML += "John";
    } else if (punkteJ < punkteM) {
        ergebnis.innerHTML += "Meike";
    } else {
        ergebnis.innerHTML = "Es ist unentschieden";
    }
};

calculate();


/* Aufgabe 3 */
const airQualitySection = document.getElementById('airQualitySection');
const aqi = document.getElementById('aqi');

const airQualityInput = document.getElementById('airQuality');
const healthConcern = document.getElementById('healthConcern');
const healthEffect = document.getElementById('healthEffect');

let concernOutput = "Good";
let effectOutput = "Little or no risk";

healthConcern.innerHTML += concernOutput;
healthEffect.innerHTML += effectOutput;

airQualityInput.addEventListener("input", function(checkAirQuality) {
    let airQuality = airQualityInput.value;
    console.log(airQuality);
    aqi.innerHTML = "AQI: " + airQuality;

    concernOutput = "";
    effectOutput = "";
    healthConcern.innerHTML = "Level of health concern: " + concernOutput;
    healthEffect.innerHTML = "Level of health effect: " + effectOutput;

    if (airQuality <= 50) {
        concernOutput = "Good";
        effectOutput = "Little or no risk";
        airQualitySection.style.backgroundColor = "#1f7400";

    } else if (airQuality > 50 && airQuality <= 100) {
        concernOutput = "Moderate";
        effectOutput = "Acceptable quality";
        airQualitySection.style.backgroundColor = "#fad004";

    } else {
        concernOutput = "Unhealthy for sensitive groups";
        effectOutput = "Generable publics not likely affected";
        airQualitySection.style.backgroundColor = "#f79803";
    } 

    healthConcern.innerHTML += concernOutput;
    healthEffect.innerHTML += effectOutput;
});

/* Aufgabe 4 */

const zahlInput = document.getElementById('zahlInput');
const vergleichSpan = document.getElementById('vergleichSpan');
const differenzSpan = document.getElementsByClassName('differenzSpan');
const doppeltSpan = document.getElementById('doppeltSpan');
const doppeltText = document.getElementById('doppeltText');

let vergleich = "größer als";
let differenz = "3";
let doppelt = "6";

vergleichSpan.innerHTML = vergleich;
Array.from(differenzSpan).forEach(element => {
    element.innerHTML = differenz;
});
doppeltSpan.innerHTML = doppelt;

zahlInput.addEventListener("input", function(getDifference) {
    const zahl = parseInt(document.getElementById('zahlInput').value);
    console.log(zahl);

    doppeltText.style.display = "block";
    
    if (zahl < 27) {
        vergleich = "kleiner als";
        differenz = 27 - zahl;
        doppeltText.style.display = "none";

    } else if (zahl > 27) {
        vergleich = "größer als";
        differenz = zahl - 27;
        doppeltSpan.innerHTML = differenz * 2;

    } else if (zahl == 27) {
        vergleich = "genauso groß wie";
        differenz = zahl - 27;
        doppeltText.style.display = "none";
    } else {
        vergleich = "größer als";
        differenz = "3";
        doppelt = "6";                
    } 
    
    vergleichSpan.innerHTML = vergleich;
    Array.from(differenzSpan).forEach(element => {
        element.innerHTML = differenz;
    });
});


/* Aufgabe 5 */

const colorSection = document.getElementById('colorSection');

function changeColor() {
    const colorId = document.getElementById('colorId').value;

    console.log(colorId);

    colorSection.style.backgroundColor = colorId;
}

/* Aufgabe 6 */
const switchBgSection = document.getElementById('switchBgSection');

function switchColors(color1 = white, color2 = black) {
    switchBgSection.style.backgroundColor = color1;
    switchBgSection.style.color = color2;
}

/* Aufgabe 7 */
const textResult = document.getElementById('textResult');
let textValue = "see your text here";

function fontGenerator() {
    let fontSizeValue = document.getElementById('fontSize').value;
    console.log(fontSizeValue + "rem");
    let fontFamilyValue = document.getElementById('fontFamily').value;
    console.log(fontFamilyValue);
    if(document.getElementById('text').value == "") {
        textValue = "see your text here";
    } else {
        textValue = document.getElementById('text').value
    };
    console.log(textValue);

    textResult.style.fontSize = fontSizeValue + "rem";
    textResult.style.fontFamily = fontFamilyValue;
    textResult.innerHTML = textValue;
};

let inputElements = document.querySelectorAll('input');
for (var i = 0; i < inputElements.length; i++) {
inputElements[i].addEventListener('input', fontGenerator);
}

let selectElement = document.getElementById('fontFamily');
selectElement.addEventListener('change', fontGenerator);



