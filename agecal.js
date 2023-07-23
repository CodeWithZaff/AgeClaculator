document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.querySelector(".input");
    const yearEl = document.querySelector(".years");
    const monthEl = document.querySelector(".months");
    const dayEl = document.querySelector(".days");
    const buttonEl = document.querySelector("button");
  
    buttonEl.addEventListener("click", calculateAge);
  
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function calculateAge() {
      const today = new Date();
      const inputDateEl = new Date(inputEl.value);
      let resultMonth, resultDate, resultYear;
  
      const inputYear = inputDateEl.getFullYear();
      const inputMonth = inputDateEl.getMonth() + 1;
      const inputDate = inputDateEl.getDate();
  
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDate = today.getDate();
  
      leapYearCheck(currentYear);
  
      if (
        inputYear > currentYear ||
        (inputMonth > currentMonth && inputYear == currentYear) ||
        (inputDate > currentDate && inputMonth == currentMonth && inputYear == currentYear)
      ) {
        alert("You are not born yet");
        displayResult("0", "0", "0");
        return;
      }
  
      resultYear = currentYear - inputYear;
  
      if (currentMonth >= inputMonth) {
        resultMonth = currentMonth - inputMonth;
      } else {
        resultYear--;
        resultMonth = 12 + currentMonth - inputMonth;
      }
  
      if (currentDate >= inputDate) {
        resultDate = currentDate - inputDate;
      } else {
        resultMonth--;
        const days = months[currentMonth];
        resultDate = days + currentDate - inputDate;
        if (resultMonth < 0) {
          resultMonth = 11;
          resultYear--;
        }
      }
      displayResult(resultDate, resultMonth, resultYear);
    }
  
    function displayResult(resultDate, resultMonth, resultYear) {
      yearEl.innerHTML = resultYear;
      monthEl.innerHTML = resultMonth;
      dayEl.innerHTML = resultDate;
    }
  
    function leapYearCheck(year) {
      if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
      } else {
        months[1] = 28;
      }
    }
  });
  