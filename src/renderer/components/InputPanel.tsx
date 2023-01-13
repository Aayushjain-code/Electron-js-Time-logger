import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

export default function InputPanel({ entriesList, setEntriesList }) {
  const [taskDescription, setTaskDescription] = useState('');
  const [submittingTask, setSubmittingTask] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [timerStatus, setTimerStatus] = useState('initial');
  const [timerStartTime, setTimerStartTime] = useState('');
  // const [timerEndTime, setTimerEndTime] = useState('');

  // The useEffect that starts and stops the timer
  useEffect(() => {
    // console.log('Inside use effect, timerStatus: ', timerStatus);
    let intervalTimer: string | number | NodeJS.Timeout | null | undefined =
      null;
    if (timerStatus === 'running') {
      intervalTimer = setInterval(() => {
        setCurrentSeconds((prevTime) => prevTime + 1);
      }, 1000);
      const now = dayjs();
      // console.log(now.format());
      // console.log(now.format('dddd, MMMM D YYYY'));
      // console.log(now.format('HH:mm:ss'));
      setTimerStartTime(now);
    } else {
      clearInterval(intervalTimer);
    }

    if (timerStatus === 'initial') {
      setCurrentSeconds(0);
      setTimerStartTime('');
      // setTimerEndTime('');
    }
    if (timerStatus === 'stopped') {
      // const end = dayjs();
      // // console.log(end.format());
      // // console.log(end.format('dddd, MMMM D YYYY'));
      // // console.log('ssss', end.format('HH:mm:ss'));
      // setTimerEndTime(end);
    }

    return () => clearInterval(intervalTimer);
  }, [timerStatus]);

  // The useEffect that submits the current task
  useEffect(() => {
    console.log('Inside submittingTask hook', submittingTask);
    if (submittingTask) {
      const taskSecondsCount = currentSeconds;

      let start = dayjs(timerStartTime).format('HH:mm:ss');
      let end = dayjs().format('HH:mm:ss');
      if (isEntryValid(taskDescription, taskSecondsCount)) {
        const newEntry = {
          id: entriesList.length + 1,
          description: taskDescription,
          secondsCount: taskSecondsCount,
          timerStartTime: start,
          timerEndTime: end,
        };
        console.log('Submitting the task', newEntry);
        setEntriesList([...entriesList, newEntry]);
        setCurrentSeconds(0);
        setTimerStatus('initial');
        setTaskDescription('');
      } else {
        console.log("The task isn't valid");
        // Handle the error by preventing the submission and informing the user
      }
      setSubmittingTask(false);
    }
  }, [submittingTask]);

  return (
    <div className="input-panel">
      <div className="input-area">
        <input
          id="task-input"
          className="task-input"
          type="text"
          placeholder="Input Employee Name"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
        />
        <TimerControls
          timerStatus={timerStatus}
          setTimerStatus={(status) => setTimerStatus(status)}
          taskSubmitTrigger={(_) => setSubmittingTask(true)}
        />
        <TimerDisplay currentSecondsCount={currentSeconds} />
      </div>
    </div>
  );
}

function isEntryValid(taskDescription, taskSecondsCount) {
  // if (taskDescription === '') return false;
  if (taskSecondsCount < 1) return false;
  return true;
}
