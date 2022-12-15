
//? ------------------------- ------------------------------ --------------------------------------

const attribut1 = document.getElementById("attribut1");
const attribut2 = document.getElementById("attribut2");
const attributx = document.getElementById("attributx");

const quantite1 = document.getElementById("quantite1");
const quantite2 = document.getElementById("quantite2");
const quantitex = document.getElementById("quantitex");

const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");

const buttonCalc = document.getElementById("buttonCalc");
const buttonClear = document.getElementById("buttonClear");

function calc(e) {
    e.preventDefault();
    const a1 = parseFloat(attribut1.value);
    const a2 = parseFloat(attribut2.value);
    const ax = parseFloat(attributx.value);
    const q1 = parseFloat(quantite1.value);
    const q2 = parseFloat(quantite2.value);
    const qx = parseFloat(quantitex.value);
    
    if (a1 && a2 && ax) {
        part1.value = Math.abs(a1 - ax);
        part2.value = Math.abs(a2 - ax);
    } else if (q1 && q2 && qx) {
        part1.value = Math.abs(q1 - qx);
        part2.value = Math.abs(q2 - qx);
    } else {
        part1.value = "";
        part2.value = "";
    }
}

function clear() {
    attribut1.value = "";
    attribut2.value = "";
    attributx.value = "";
    quantite1.value = "";
    quantite2.value = "";
    quantitex.value = "";
    part1.value = "";
    part2.value = "";
}

buttonCalc.addEventListener("click", calc);
buttonClear.addEventListener("click", clear);