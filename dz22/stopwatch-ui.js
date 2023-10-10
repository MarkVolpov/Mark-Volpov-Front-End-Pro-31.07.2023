export default class StopwatchUI {
  constructor(initialTime) {
    this.initialTime = initialTime;
    this.stopwatch = null;
    this.createUI();
  }

  createUI() {
    // Створюємо DOM елементи
    this.stopwatchElement = document.createElement('div');
    this.startBtn = document.createElement('button');
    this.startBtn.textContent = 'Start';
    this.pauseBtn = document.createElement('button');
    this.pauseBtn.textContent = 'Pause';
    this.resetBtn = document.createElement('button');
    this.resetBtn.textContent = 'Reset';

    // Додаємо обробники подій для кнопок
    this.startBtn.addEventListener('click', () => {
      if (this.stopwatch) {
        this.stopwatch.start();
      }
    });

    this.pauseBtn.addEventListener('click', () => {
      if (this.stopwatch) {
        this.stopwatch.pause();
      }
    });

    this.resetBtn.addEventListener('click', () => {
      if (this.stopwatch) {
        this.stopwatch.reset();
        this.setTime(this.initialTime);
      }
    });

    // Додаємо елементи до DOM
    this.stopwatchElement.appendChild(this.startBtn);
    this.stopwatchElement.appendChild(this.pauseBtn);
    this.stopwatchElement.appendChild(this.resetBtn);
  }

  addStartBtnListener(callback) {
    this.startBtn.addEventListener('click', callback);
  }

  addPauseBtnListener(callback) {
    this.pauseBtn.addEventListener('click', callback);
  }

  addResetBtnListener(callback) {
    this.resetBtn.addEventListener('click', callback);
  }

  appendStopwatch(parentElement) {
    parentElement.appendChild(this.stopwatchElement);
  }

  setTime(time) {
    if (!this.stopwatch) {
      this.stopwatch = new Stopwatch(() => {});
    }
    this.stopwatch.time = time;
    this.stopwatch.callback(time);
  }
}