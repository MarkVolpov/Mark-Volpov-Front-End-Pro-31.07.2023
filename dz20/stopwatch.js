export default class StopWatch {
    constructor(callback) {
      this.callback = callback;
      this.running = false;
      this.time = { hours: 0, minutes: 0, seconds: 0 };
      this.interval = null;
    }
  
    start() {
      if (!this.running) {
        this.running = true;
        this.interval = setInterval(() => {
          this.time.seconds++;
          if (this.time.seconds === 60) {
            this.time.seconds = 0;
            this.time.minutes++;
            if (this.time.minutes === 60) {
              this.time.minutes = 0;
              this.time.hours++;
            }
          }
          this.callback(this.time);
        }, 1000);
      }
    }
  
    pause() {
      if (this.running) {
        clearInterval(this.interval);
        this.running = false;
      }
    }
  
    reset() {
      this.pause();
      this.time = { hours: 0, minutes: 0, seconds: 0 };
    }
   
    getTime() {
      return this.time ;
    }
  }
  


