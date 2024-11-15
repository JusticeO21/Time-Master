import Clock from './src/clock.js';
import { updateClockDisplay } from './src/display.js';
import { showNotification } from './src/notification.js';

const clock = new Clock();
const hourFormatSelect = document.getElementById("hour-format");
const timezoneOffsetInput = document.getElementById("timezone-offset");
const colorPicker = document.getElementById("color-picker");
const alarmInput = document.getElementById("alarm-input");
const alarmBtn = document.getElementById("alarm-btn");
const setAlarmBtn = document.getElementById("set-alarm");
const alarmTimer = document.getElementById("alarm-time")

function setupClock() {
  setInterval(() => {
    updateClockDisplay(clock);
    const { hours, minutes } = clock.getTime();
    alarmInput.min = `${clock.pad(hours)}:${clock.pad(minutes)}`
    if (clock.checkAlarm()) {
      showNotification("Alarm! Time's up!")
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

  setAlarmBtn.addEventListener("click", () => {
      alarmTimer.style.display = "block";
  } )

  alarmBtn.addEventListener("click", () => {
    if (alarmInput.value.trim() === "") {
      showNotification("Empty alarm input")
      return;
    }
    clock.setAlarm(alarmInput.value);
    showNotification("Alarm set for " + alarmInput.value)
    alarmTimer.style.display = "none";
  });
}

setupClock();
setupEventListeners();
