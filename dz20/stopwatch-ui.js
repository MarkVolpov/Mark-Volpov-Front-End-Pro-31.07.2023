export default class StopwatchUI {
  constructor(initialTime) {
    this.initialTime = initialTime;
    this.stopwatch = null;
    this.createUI();
    this.setTime(initialTime);
  }

  createUI() {
    this.stopwatchElement = document.createElement('div');
    this.startBtn = document.createElement('button');
    this.startBtn.textContent = 'Start';
    this.pauseBtn = document.createElement('button');
    this.pauseBtn.textContent = 'Pause';
    this.resetBtn = document.createElement('button');
    this.resetBtn.textContent = 'Reset';

   
    this.stopwatch = document.createElement('div');
    this.stopwatch.id = 'stopwatch';

    this.stopwatchElement.append(this.stopwatch);

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
    this.resetBtn.addEventListener('click', e => {
      this.setTime({hours: 0, minutes: 0, seconds: 0}),
      callback()
    })
  }

  appendStopwatch(parentElement) {
    
    parentElement.append(this.stopwatchElement);
  }

  setTime(time) {
 
    this.stopwatch.textContent = JSON.stringify(time)

  }
}
