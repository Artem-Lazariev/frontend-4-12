class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.timerRef = document.querySelector(this.selector);
    this.daysRef = this.timerRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"]');

    this.init();
  }

  init() {
    this.updateClockface();
    setInterval(() => {
      this.updateClockface();
    }, 1000);
  }

  updateClockface() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.daysRef.textContent = days;
    this.hoursRef.textContent = String(hours).padStart(2, '0');
    this.minsRef.textContent = String(mins).padStart(2, '0');
    this.secsRef.textContent = String(secs).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2026 23:59:59'),
});
