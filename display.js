export function updateClockDisplay(clock) {
  const display = document.getElementById("time-display");
  display.style.color = clock.color;
  const timeString = clock.hourFormat === 12 ? clock.get12HourTime() : clock.getFormattedTime();
  display.textContent = timeString;
}
