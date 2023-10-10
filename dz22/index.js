
import Stopwatch from './stopwatch.js';
import StopwatchUI from './stopwatch-ui.js';

const initialTime = {hours: 0, minutes: 0, seconds: 0};
const ui = new StopwatchUI(initialTime);
const onTick = (time) => ui.setTime(time);
const stopwatch = new Stopwatch(onTick);

ui.addStartBtnListener(e => stopwatch.start());
ui.addPauseBtnListener(e => stopwatch.pause());
ui.addResetBtnListener(e => stopwatch.reset());

ui.appendStopWatch(document.body);