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
