import Clock from './clock.js';
import { updateClockDisplay } from './display.js';

const clock = new Clock();
const hourFormatSelect = document.getElementById("hour-format");
const timezoneOffsetInput = document.getElementById("timezone-offset");
const colorPicker = document.getElementById("color-picker");
const alarmInput = document.getElementById("alarm-input");
const alarmBtn = document.getElementById("alarm-btn");

function setupClock() {
  setInterval(() => {
    updateClockDisplay(clock);
    if (clock.checkAlarm()) {
      alert("Alarm! Time's up!");
      clock.setAlarm(null); // Clear alarm after triggering
    }
  }, 1000);
}

function updateSettings() {
  clock.hourFormat = parseInt(hourFormatSelect.value);
  clock.timeZoneOffset = parseInt(timezoneOffsetInput.value) || 0;
  clock.color = colorPicker.value;
}

function setupEventListeners() {
  hourFormatSelect.addEventListener("change", updateSettings);
  timezoneOffsetInput.addEventListener("input", updateSettings);
  colorPicker.addEventListener("input", updateSettings);

  alarmBtn.addEventListener("click", () => {
    clock.setAlarm(alarmInput.value);
    alert("Alarm set for " + alarmInput.value);
  });
}

setupClock();
setupEventListeners();
