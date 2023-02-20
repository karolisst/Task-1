/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const calcForm = document.querySelector("form");

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = document.getElementById("search").value;
  const output = document.getElementById("output");

  const svarai = number * 2.2046;
  const gramai = number / 0.001;
  const uncijos = number * 35.274;

  if (isNaN(number)) {
    output.innerHTML = `Neteisingai įvesta reikšmė, prašome įvesti skaičių.`;
  } else if (number === "") {
    output.innerHTML = `Nieko neįvedėte, prašome įvesti skaičių.`;
  } else
    output.innerHTML = `<p><strong>Rezultatai:</strong></p><br><p>${number} kg = ${svarai} lb</p><p>${number} kg = ${gramai} g</p><p>${number} kg = ${uncijos} oz</p>`;
  document.getElementById("output").style.cssText =
    "  max-width: 80%; margin: 50px auto; text-align: center; font-size: 2.1em; padding: 20px;";
});
