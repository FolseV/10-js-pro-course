const inputSalaryEl = document.querySelector(".input-salary");
const inputVacationEl = document.querySelector(".input-vacation");

const selectEl = document.getElementById("currency") as HTMLSelectElement;
// const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
// const inputVacationElValue: number = parseFloat((inputVacationEl as HTMLInputElement).value);

const workDaysEl = document.getElementById("work-days");
const workHours = document.getElementById("work-hours");
for (let i: number = 1; i <= 7; i++) {
  let newOption = new Option(i + "");
  workDaysEl.append(newOption);
}
for (let i: number = 1; i <= 24; i++) {
  let newOption = new Option(i + "");
  workHours.append(newOption);
}

const salaryYearEl = document.querySelector(".salary-in-year-value");
const salaryVacationEl = document.querySelector(".salary-in-vacation-value");
const salaryWeekEl = document.querySelector(".salary-in-week-value");
const salaryDayEl = document.querySelector(".salary-in-day-value");
const salaryHourEl = document.querySelector(".salary-in-hour-value");
const salaryMinuteEl = document.querySelector(".salary-in-minute-value");
const salaryRnEl = document.querySelector(".salary-rn-value");

function calcSalaryYear(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue * 12);
}
function calcSalaryVacation(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  const inputVacationElValue: number = parseFloat((inputVacationEl as HTMLInputElement).value);
  return Math.round((inputSalaryElValue / 30) * inputVacationElValue);
}

function calcSalaryWeek(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round((inputSalaryElValue / 30) * 7);
}

function calcSalaryDay(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue / 30);
}

function calcSalaryHour(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue / 720);
}

function calcSalaryMinute(): string {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return (inputSalaryElValue / 720 / 60).toFixed(2);
}
// эту функцию каждую секунду
function calcSalaryRn(): string {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return (inputSalaryElValue / 720 / 60 / 60).toFixed(2);
}
// const select = (document.getElementById("currency") as HTMLOptionElement).value;
function printResults(): void {
  //   let salaryYearElValue: string = salaryYearEl.innerHTML;
  //   const select = (document.getElementById("currency") as HTMLOptionElement).value;
  let select = selectEl.value;
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  if (inputSalaryElValue) {
    salaryYearEl.innerHTML = calcSalaryYear() + " " + select;
    salaryVacationEl.innerHTML = calcSalaryVacation() + " " + select;
    salaryWeekEl.innerHTML = calcSalaryWeek() + " " + select;
    salaryDayEl.innerHTML = calcSalaryDay() + " " + select;
    salaryHourEl.innerHTML = calcSalaryHour() + " " + select;
    salaryMinuteEl.innerHTML = calcSalaryMinute() + " " + select;
  } else {
    salaryYearEl.innerHTML = " " + select;
    salaryVacationEl.innerHTML = " " + select;
    salaryWeekEl.innerHTML = " " + select;
    salaryDayEl.innerHTML = " " + select;
    salaryHourEl.innerHTML = " " + select;
    salaryMinuteEl.innerHTML = " " + select;
  }
}

// console.log(setInterval(calcSalaryYear, 1000));
// var myVar = setInterval(function () {
//   printResults();
// }, 1000);

//test button
const buttonEl = document.querySelector(".button");
buttonEl.addEventListener("click", () => {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  console.log(inputSalaryElValue);
  console.log(inputSalaryEl);
  printResults();
});
setInterval(function () {
  printResults();
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  let select = selectEl.value;
  if (inputSalaryElValue) {
    salaryRnEl.innerHTML = calcSalaryRn() + calcSalaryRn() + " " + select;
  } else {
    salaryRnEl.innerHTML = " " + select;
  }
  //   salaryRnEl.innerHTML = calcSalaryRn() + calcSalaryRn() + " " + select;
}, 1000);
