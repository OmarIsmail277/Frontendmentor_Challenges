document.querySelector(".dob__form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);

  const daysCounter = document.getElementById("days-counter");
  const monthsCounter = document.getElementById("months-counter");
  const yearsCounter = document.getElementById("years-counter");

  daysCounter.textContent = "--";
  monthsCounter.textContent = "--";
  yearsCounter.textContent = "--";

  let isValid = true;
  const currentDate = new Date(); // Current date
  const birthDate = new Date(year, month, day); // months are 0-based in JS
  let currentYear = new Date().getFullYear();

  // Day validation
  if (!dayInput.value.trim()) {
    showError(dayInput, "This field is required");
    isValid = false;
  } else if (
    isNaN(day) ||
    day < 1 ||
    day > 31 ||
    day > getDaysInMonth(month, year)
  ) {
    showError(dayInput, "Must be a valid day");
    isValid = false;
  } else {
    clearError(dayInput);
  }

  // Month validation
  if (!monthInput.value.trim()) {
    showError(monthInput, "This field is required");
    isValid = false;
  } else if (isNaN(month) || month < 1 || month > 12) {
    showError(monthInput, "Must be a valid month");
    isValid = false;
  } else {
    clearError(monthInput);
  }

  // Year validation
  if (!yearInput.value.trim()) {
    showError(yearInput, "This field is required");
    isValid = false;
  } else if (year > currentYear) {
    showError(yearInput, "Must be in the past");
    isValid = false;
  } else if (isNaN(year) || year < 1900) {
    showError(yearInput, "Must be a valid year");
    isValid = false;
  } else if (birthDate > currentDate) {
    showError(dayInput, "Must be in the past");
    showError(monthInput, "");
    showError(yearInput, "");
    // document.getElementById("year-error-message").innerText = "";
    // document.getElementById("month-error-message").innerText = "";
    isValid = false;
  } else {
    clearError(yearInput);
  }

  if (isValid) {
    let userYear = currentDate.getFullYear() - birthDate.getFullYear();
    let userMonths = currentDate.getMonth() - birthDate.getMonth();
    let userDays = currentDate.getDate() - birthDate.getDate();

    if (userMonths < 0) {
      userYear--;
      userMonths += 12;
    }

    if (userDays < 0) {
      userMonths--;
      // Get the number of days in the previous month
      const previousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      userDays += previousMonth.getDate();
    }
    userMonths++;

    // daysCounter.textContent = userDays;
    // monthsCounter.textContent = userMonths;
    // yearsCounter.textContent = userYear;

    // Animate the counters
    animateCounter(daysCounter, userDays);
    animateCounter(monthsCounter, userMonths);
    animateCounter(yearsCounter, userYear);
  }
});

const labelName = document.querySelector(".dob-form__label");
// Helper functions for showing and clearing error messages
function showError(input, message) {
  input.classList.add("error");
  const errorMessage = input.parentElement.querySelector(".error-message");
  input.previousElementSibling.classList.add("label-error");
  if (errorMessage) {
    errorMessage.innerText = message;
  }
}

function clearError(input) {
  input.classList.remove("error");
  input.previousElementSibling.classList.remove("label-error");

  const errorMessage = input.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.innerText = "";
  }
}

// Helper functions to state if it's a leap year or not
// and to get Days in Month

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29; // Leap year: February has 29 days
  }
  return daysInMonth[month - 1];
}

function animateCounter(element, endValue) {
  let startValue = 0;
  const duration = 2000; // Animation duration in milliseconds
  const stepTime = 50; // Time between each step in milliseconds
  const steps = duration / stepTime;
  const increment = endValue / steps;

  function updateCounter() {
    startValue += increment;
    if (startValue >= endValue) {
      startValue = endValue;
      element.textContent = Math.round(startValue);
      return;
    }
    element.textContent = Math.round(startValue);
    requestAnimationFrame(updateCounter);
  }

  updateCounter();
}
