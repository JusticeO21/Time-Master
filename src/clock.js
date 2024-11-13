export default class Clock {
  constructor(timeZoneOffset = 0, hourFormat = 24, color = "#000000") {
    this.timeZoneOffset = timeZoneOffset;
    this.hourFormat = hourFormat;
    this.color = color;
    this.alarmTime = null;
  }

  getTime() {
    const now = new Date(new Date().getTime() + this.timeZoneOffset * 3600 * 1000);
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }

  getFormattedTime() {
    const { hours, minutes, seconds } = this.getTime();
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  get12HourTime() {
    const { hours, minutes, seconds } = this.getTime();
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${this.pad(hour12)}:${this.pad(minutes)}:${this.pad(seconds)} ${period}`;
  }

  pad(number) {
    return number < 10 ? `0${number}` : number;
  }

  setAlarm(time) {
    this.alarmTime = time;
  }

  checkAlarm() {
    if (!this.alarmTime) return false;
    const { hours, minutes } = this.getTime();
    return `${this.pad(hours)}:${this.pad(minutes)}` === this.alarmTime;
  }
}
