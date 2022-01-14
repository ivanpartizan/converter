const tabs = document.querySelectorAll(".buttons button");
const contents = document.querySelectorAll(".content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabs[index].classList.add("active");
    contents[index].classList.add("active");
  });
});

// Round Number
function round(number) {
  return Math.round(number * 100) / 100;
}

// Length
let km = document.querySelector("#km");
let m = document.querySelector("#m");
let cm = document.querySelector("#cm");
let mm = document.querySelector("#mm");
let miles = document.querySelector("#miles");
let yards = document.querySelector("#yards");
let feet = document.querySelector("#feet");
let inches = document.querySelector("#inches");

function fromKm() {
  let kmValue = +km.value;
  m.value = kmValue * 1000;
  cm.value = kmValue * 100000;
  mm.value = kmValue * 1000000;
  miles.value = round(kmValue * 0.621371192);
  yards.value = round(kmValue * 1093.6133);
  feet.value = round(kmValue * 3280.8399);
  inches.value = round(kmValue * 39370.0787);
}

function fromM() {
  let mValue = +m.value;
  km.value = mValue / 1000;
  cm.value = mValue * 100;
  mm.value = mValue * 1000;
  miles.value = round(mValue * 0.000621371192);
  yards.value = round(mValue * 1.0936133);
  feet.value = round(mValue * 3.2808399);
  inches.value = round(mValue * 39.3700787);
}

function fromCm() {
  let cmValue = +cm.value;
  km.value = cmValue / 100000;
  m.value = cmValue / 100;
  mm.value = cmValue * 10;
  miles.value = round(cmValue / 160934.4);
  yards.value = round(cmValue * 0.010936133);
  feet.value = round(cmValue * 0.032808399);
  inches.value = round(cmValue * 0.393700787);
}

function fromMm() {
  let mmValue = +mm.value;
  km.value = mmValue / 1000000;
  m.value = mmValue / 1000;
  cm.value = mmValue / 10;
  miles.value = round(mmValue / 1609344);
  yards.value = round(mmValue * 0.0010936133);
  feet.value = round(mmValue * 0.0032808399);
  inches.value = round(mmValue * 0.0393700787);
}

function fromMiles() {
  let milesValue = +miles.value;
  km.value = round(milesValue / 0.621371192);
  m.value = round(milesValue / 0.000621371192);
  cm.value = round(milesValue * 160934.4);
  mm.value = round(milesValue * 1609344);
  yards.value = round(milesValue * 1760);
  feet.value = round(milesValue * 5280);
  inches.value = round(milesValue * 63360);
}

function fromYards() {
  let yardsValue = +yards.value;
  km.value = round(yardsValue / 1093.6133);
  m.value = round(yardsValue / 1.0936133);
  cm.value = round(yardsValue / 0.010936133);
  mm.value = round(yardsValue / 0.0010936133);
  miles.value = round(yardsValue / 1760);
  feet.value = round(yardsValue / 0.333333333);
  inches.value = round(yardsValue / 0.0277777778);
}

function fromFeet() {
  let feetValue = +feet.value;
  km.value = round(feetValue / 3280.8399);
  m.value = round(feetValue / 3.2808399);
  cm.value = round(feetValue / 0.032808399);
  mm.value = round(feetValue / 0.0032808399);
  miles.value = round(feetValue * 0.000189393939);
  yards.value = round(feetValue * 0.333333333);
  inches.value = round(feetValue * 12);
}

function fromInches() {
  let inchesValue = +inches.value;
  km.value = round(inchesValue / 39370.0787);
  m.value = round(inchesValue / 39.3700787);
  cm.value = round(inchesValue / 0.393700787);
  mm.value = round(inchesValue / 0.0393700787);
  miles.value = round(inchesValue / 63360);
  yards.value = round(inchesValue * 0.0277777778);
  feet.value = round(inchesValue / 12);
}

km.addEventListener("input", fromKm);
m.addEventListener("input", fromM);
cm.addEventListener("input", fromCm);
mm.addEventListener("input", fromMm);
miles.addEventListener("input", fromMiles);
yards.addEventListener("input", fromYards);
feet.addEventListener("input", fromFeet);
inches.addEventListener("input", fromInches);

// Area
let hectares = document.querySelector("#hectares");
let acres = document.querySelector("#acres");
let sqkm = document.querySelector("#sqkm");
let sqm = document.querySelector("#sqm");
let sqcm = document.querySelector("#sqcm");
let sqmi = document.querySelector("#sqmi");
let sqy = document.querySelector("#sqy");

function fromHectares() {
  let hectaresValue = +hectares.value;
  acres.value = round(hectaresValue * 2.47105381);
  sqkm.value = round(hectaresValue * 0.01);
  sqm.value = round(hectaresValue * 10000);
  sqcm.value = round(hectaresValue * 100000000);
  sqmi.value = round(hectaresValue * 0.0038610216);
  sqy.value = round(hectaresValue * 11959.900463011);
}

function fromAcres() {
  let acresValue = +acres.value;
  hectares.value = round(acresValue * 0.404685642);
  sqkm.value = round(acresValue * 0.00404685642);
  sqm.value = round(acresValue * 4046.85642);
  sqcm.value = round(acresValue * 40468564.2);
  sqmi.value = round(acresValue * 0.0015625);
  sqy.value = round(acresValue * 4840);
}

function fromSqkm() {
  let sqkmValue = +sqkm.value;
  hectares.value = round(sqkmValue * 100);
  acres.value = round(sqkmValue * 247.105381);
  sqm.value = round(sqkmValue * 1000000);
  sqcm.value = round(sqkmValue * 10000000000);
  sqmi.value = round(sqkmValue * 0.386102159);
  sqy.value = round(sqkmValue * 1195990.05);
}

function fromSqm() {
  let sqmValue = +sqm.value;
  hectares.value = round(sqmValue * 0.0001);
  acres.value = round(sqmValue * 0.000247105381);
  sqkm.value = round(sqmValue / 1000000);
  sqcm.value = round(sqmValue * 10000);
  sqmi.value = round(sqmValue * 0.0000003861);
  sqy.value = round(sqmValue * 1.19599005);
}

function fromSqcm() {
  let sqcmValue = +sqcm.value;
  hectares.value = round(sqcmValue / 100000000);
  acres.value = round(sqcmValue / 40468564.2);
  sqkm.value = round(sqcmValue / 10000000000);
  sqm.value = round(sqcmValue / 10000);
  sqmi.value = round(sqcmValue * 0.00000000003861);
  sqy.value = round(sqcmValue * 0.0001196);
}

function fromSqmi() {
  let sqmiValue = +sqmi.value;
  hectares.value = round(sqmiValue * 258.998811);
  acres.value = round(sqmiValue * 640);
  sqkm.value = round(sqmiValue * 2.58998811);
  sqm.value = round(sqmiValue * 2589988.11);
  sqcm.value = round(sqmiValue * 2.58998811 * Math.pow(10, 10));
  sqy.value = round(sqmiValue * 3097600);
}

function fromSqy() {
  let sqyValue = +sqy.value;
  hectares.value = round(sqyValue / 11959.900463011);
  acres.value = round(sqyValue / 4840);
  sqkm.value = round(sqyValue / 1195990.05);
  sqm.value = round(sqyValue / 1.19599005);
  sqcm.value = round(sqyValue * 8361.2736);
  sqmi.value = round(sqyValue / 3097600);
}

hectares.addEventListener("input", fromHectares);
acres.addEventListener("input", fromAcres);
sqkm.addEventListener("input", fromSqkm);
sqm.addEventListener("input", fromSqm);
sqcm.addEventListener("input", fromSqcm);
sqmi.addEventListener("input", fromSqmi);
sqy.addEventListener("input", fromSqy);

// Weight
let tons = document.querySelector("#tons");
let kilograms = document.querySelector("#kilograms");
let grams = document.querySelector("#grams");
let milligrams = document.querySelector("#milligrams");
let micrograms = document.querySelector("#micrograms");
let pounds = document.querySelector("#pounds");
let ounces = document.querySelector("#ounces");

function fromTons() {
  let tonsValue = +tons.value;
  kilograms.value = round(tonsValue * 1000);
  grams.value = round(tonsValue * 1000000);
  milligrams.value = round(tonsValue * 1000000000);
  micrograms.value = round(tonsValue * 1000000000000);
  pounds.value = round(tonsValue * 2204.62262);
  ounces.value = round(tonsValue * 35273.9619);
}

function fromKilograms() {
  let kilogramsValue = +kilograms.value;
  tons.value = round(kilogramsValue / 1000);
  grams.value = round(kilogramsValue * 1000);
  milligrams.value = round(kilogramsValue * 1000000);
  micrograms.value = round(kilogramsValue * 1000000000);
  pounds.value = round(kilogramsValue * 2.20462262);
  ounces.value = round(kilogramsValue * 35.2739619);
}

function fromGrams() {
  let gramsValue = +grams.value;
  tons.value = round(gramsValue / 1000000);
  kilograms.value = round(gramsValue / 1000);
  milligrams.value = round(gramsValue * 1000);
  micrograms.value = round(gramsValue * 1000000);
  pounds.value = round(gramsValue * 0.00220462262);
  ounces.value = round(gramsValue * 0.0352739619);
}

function fromMilligrams() {
  let milligramsValue = +milligrams.value;
  tons.value = round(milligramsValue / 1000000000);
  kilograms.value = round(milligramsValue / 1000000);
  grams.value = round(milligramsValue / 1000);
  micrograms.value = round(milligramsValue * 1000);
  pounds.value = round(milligramsValue / 453592.37);
  ounces.value = round(milligramsValue / 28349.5231);
}

function fromMicrograms() {
  let microgramsValue = +micrograms.value;
  tons.value = round(microgramsValue / 1000000000000);
  kilograms.value = round(microgramsValue / 1000000000);
  grams.value = round(microgramsValue / 1000000);
  milligrams.value = round(microgramsValue / 1000);
  pounds.value = round(microgramsValue / 453592370);
  ounces.value = round(microgramsValue / 28349523.1);
}

function fromPounds() {
  let poundsValue = +pounds.value;
  tons.value = round(poundsValue / 2204.62262);
  kilograms.value = round(poundsValue / 2.20462262);
  grams.value = round(poundsValue / 0.00220462262);
  milligrams.value = round(poundsValue * 453592.37);
  micrograms.value = round(poundsValue * 453592370);
  ounces.value = round(poundsValue * 16);
}

function fromOunces() {
  let ouncesValue = +ounces.value;
  tons.value = round(ouncesValue / 35273.9619);
  kilograms.value = round(ouncesValue / 35.2739619);
  grams.value = round(ouncesValue * 28.3495231);
  milligrams.value = round(ouncesValue * 28349.5231);
  micrograms.value = round(ouncesValue * 28349523.1);
  pounds.value = round(ouncesValue / 16);
}

tons.addEventListener("input", fromTons);
kilograms.addEventListener("input", fromKilograms);
grams.addEventListener("input", fromGrams);
milligrams.addEventListener("input", fromMilligrams);
micrograms.addEventListener("input", fromMicrograms);
pounds.addEventListener("input", fromPounds);
ounces.addEventListener("input", fromOunces);

// Temp
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

function fromCelsius() {
  let celsiusValue = +celsius.value;
  fahrenheit.value = round((celsiusValue * 9) / 5 + 32);
  kelvin.value = round(celsiusValue + 273.15);
}

function fromFahrenheit() {
  let fahrenheitValue = +fahrenheit.value;
  celsius.value = round(((fahrenheitValue - 32) * 5) / 9);
  kelvin.value = round(((fahrenheitValue + 459.67) * 5) / 9);
}

function fromKelvin() {
  let kelvinValue = +kelvin.value;
  celsius.value = round(kelvinValue - 273.15);
  fahrenheit.value = round((kelvinValue * 9) / 5 - 459.67);
}

celsius.addEventListener("input", fromCelsius);
fahrenheit.addEventListener("input", fromFahrenheit);
kelvin.addEventListener("input", fromKelvin);

// Time
let years = document.querySelector("#years");
let months = document.querySelector("#months");
let weeks = document.querySelector("#weeks");
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let milliseconds = document.querySelector("#milliseconds");
let microseconds = document.querySelector("#microseconds");

function fromYears() {
  let yearsValue = +years.value;
  months.value = yearsValue * 12;
  weeks.value = round(yearsValue * 52.177457);
  days.value = round(yearsValue * 365.242199);
  hours.value = round(yearsValue * 8765.81277);
  minutes.value = round(yearsValue * 525948.766);
  seconds.value = round(yearsValue * 31556926);
  milliseconds.value = round(yearsValue * (3.1556926 * Math.pow(10, 10)));
  microseconds.value = round(yearsValue * (3.1556926 * Math.pow(10, 13)));
}

function fromMonths() {
  let monthsValue = +months.value;
  years.value = round(monthsValue / 12);
  weeks.value = round(monthsValue * 4.34812141);
  days.value = round(monthsValue * 30.4368499);
  hours.value = round(monthsValue * 730.484398);
  minutes.value = round(monthsValue * 43829.0639);
  seconds.value = round(monthsValue * 2629743.83);
  milliseconds.value = round(monthsValue * (2.62974383 * Math.pow(10, 9)));
  microseconds.value = round(monthsValue * (2.62974383 * Math.pow(10, 12)));
}

function fromWeeks() {
  let weeksValue = +weeks.value;
  years.value = round(weeksValue * 0.0191653649);
  months.value = round(weeksValue * 0.229984378);
  days.value = round(weeksValue * 7);
  hours.value = round(weeksValue * 168);
  minutes.value = round(weeksValue * 10080);
  seconds.value = round(weeksValue * 604800);
  milliseconds.value = round(weeksValue * 604800000);
  microseconds.value = round(weeksValue * 604800000000);
}

function fromDays() {
  let daysValue = +days.value;
  years.value = round(daysValue / 365.242199);
  months.value = round(daysValue / 30.4368499);
  weeks.value = round(daysValue / 7);
  hours.value = round(daysValue * 24);
  minutes.value = round(daysValue * 1440);
  seconds.value = round(daysValue * 86400);
  milliseconds.value = round(daysValue * 86400000);
  microseconds.value = round(daysValue * 86400000000);
}

function fromHours() {
  let hoursValue = +hours.value;
  years.value = round(hoursValue / 8765.81277);
  months.value = round(hoursValue * 0.00136895463);
  weeks.value = round(hoursValue * 0.00595238095);
  days.value = round(hoursValue * 0.0416666667);
  minutes.value = round(hoursValue * 60);
  seconds.value = round(hoursValue * 3600);
  milliseconds.value = round(hoursValue * 3600000);
  microseconds.value = round(hoursValue * 3600000000);
}

function fromMinutes() {
  let minutesValue = +minutes.value;
  years.value = round(minutesValue / 525948.766);
  months.value = round(minutesValue / 43829.0639);
  weeks.value = round(minutesValue / 10080);
  days.value = round(minutesValue / 1440);
  hours.value = round(minutesValue / 60);
  seconds.value = round(minutesValue * 60);
  milliseconds.value = round(minutesValue * 60000);
  microseconds.value = round(minutesValue * 60000000);
}

function fromSeconds() {
  let secondsValue = +seconds.value;
  years.value = round(secondsValue / 31556926);
  months.value = round(secondsValue / 2629743.83);
  weeks.value = round(secondsValue / 604800);
  days.value = round(secondsValue / 86400);
  hours.value = round(secondsValue / 3600);
  minutes.value = round(secondsValue / 60);
  milliseconds.value = round(secondsValue * 1000);
  microseconds.value = round(secondsValue * 1000000);
}

function fromMilliseconds() {
  let millisecondsValue = +milliseconds.value;
  years.value = round(millisecondsValue / (3.1556926 * Math.pow(10, 10)));
  months.value = round(millisecondsValue / (2.62974383 * Math.pow(10, 9)));
  weeks.value = round(millisecondsValue / 604800000);
  days.value = round(millisecondsValue / 86400000);
  hours.value = round(millisecondsValue / 3600000);
  minutes.value = round(millisecondsValue / 60000);
  seconds.value = round(millisecondsValue / 1000);
  microseconds.value = round(millisecondsValue * 1000);
}

function fromMicroseconds() {
  let microsecondsValue = +microseconds.value;
  years.value = round(microsecondsValue / (3.1556926 * Math.pow(10, 13)));
  months.value = round(microsecondsValue / (2.62974383 * Math.pow(10, 12)));
  weeks.value = round(microsecondsValue / 604800000000);
  days.value = round(microsecondsValue / 86400000000);
  hours.value = round(microsecondsValue / 3600000000);
  minutes.value = round(microsecondsValue / 60000000);
  seconds.value = round(microsecondsValue / 1000000);
  milliseconds.value = round(microsecondsValue / 1000);
}

years.addEventListener("input", fromYears);
months.addEventListener("input", fromMonths);
weeks.addEventListener("input", fromWeeks);
days.addEventListener("input", fromDays);
hours.addEventListener("input", fromHours);
minutes.addEventListener("input", fromMinutes);
seconds.addEventListener("input", fromSeconds);
milliseconds.addEventListener("input", fromMilliseconds);
microseconds.addEventListener("input", fromMicroseconds);
