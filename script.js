const timer = (newYear) => {
  const partDay = document.getElementById("partDay");
  const day = document.getElementById("day");
  const timeNow = document.getElementById("timeNow");
  const dateToNewYear = document.getElementById("dateToNewYear");
  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(newYear).getTime();
    let dateNowMs = new Date().getTime();
    let timeRemaining = (dateStop - dateNowMs) / 1000;
    let daysToNewYear = Math.floor(timeRemaining / 60 / 60 / 24);

    let nowDate = new Date();
    // let year = nowDate.getFullYear().toString().padStart(2, "0");
    // let month = nowDate.getMonth();
    // let date = nowDate.getDate().toString().padStart(2, "0");
    let day = nowDate.getDay();
    let hours = nowDate.getHours().toString().padStart(2, "0");
    let minutes = nowDate.getMinutes().toString().padStart(2, "0");
    let seconds = nowDate.getSeconds().toString().padStart(2, "0");

    return {
      day,
      hours,
      minutes,
      seconds,
      daysToNewYear,
    };
  };

  const getDayName = (dayNum) => {
    switch (true) {
      case dayNum === 0:
        day.textContent = "воскрессенье";
        break;
      case dayNum === 1:
        day.textContent = "понедельник";
        break;
      case dayNum === 2:
        day.textContent = "вторник";
        break;
      case dayNum === 3:
        day.textContent = "среда";
        break;
      case dayNum === 4:
        day.textContent = "четверг";
        break;
      case dayNum === 5:
        day.textContent = "пятница";
        break;
      case dayNum === 6:
        day.textContent = "суббота";
        break;
    }
  };

  const getPartDay = (hoursForPartDay) => {
    if (Number(hoursForPartDay) > 22 || Number(hoursForPartDay) <= 6) {
      partDay.textContent = "Доброй ночи!";
    }
    if (Number(hoursForPartDay) > 6 && Number(hoursForPartDay) <= 10) {
      partDay.textContent = "Доброе утро!";
    }
    if (Number(hoursForPartDay) > 10 && Number(hoursForPartDay) <= 22) {
      partDay.textContent = "Добрый день!";
    }
  };

  const getTimeNow = (hours, minutes, seconds) => {
    let amPm;
    if (Number(hours) >= 12 || Number(hours) < 24) {
      amPm = "PM";
    } else {
      amPm = "AM";
    }
    timeNow.innerHTML = `<span id="timeNow">${hours}:${minutes}:${seconds} ${amPm}</span>`;
  };

  const getDateToNewYear = (daysToNewYear) => {
    dateToNewYear.textContent = daysToNewYear + " дней";
  };

  const pullData = () => {
    let getData = getTimeRemaining();

    if (getData.daysToNewYear > 0) {
      getPartDay(getData.hours);
      getDayName(getData.day);
      getTimeNow(getData.hours, getData.minutes, getData.seconds);
      getDateToNewYear(getData.daysToNewYear);
    } else {
      clearInterval(idInterval);
    }
  };

  idInterval = setInterval(pullData, 1000);
};

timer("31 december 2022");
