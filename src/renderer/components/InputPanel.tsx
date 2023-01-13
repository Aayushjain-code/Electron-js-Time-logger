/* eslint-disable no-empty */
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import { formatToHoursMinutesSeconds } from 'renderer/utils';

export default function InputPanel({ entriesList, setEntriesList }) {
  const [taskName, settaskName] = useState('');
  const [submittingTask, setSubmittingTask] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [timerStatus, setTimerStatus] = useState('initial');
  const [timerStartTime, setTimerStartTime] = useState('');

  // The useEffect that starts and stops the timer
  useEffect(() => {
    let intervalTimer: string | number | NodeJS.Timeout | null | undefined =
      null;
    if (timerStatus === 'running') {
      intervalTimer = setInterval(() => {
        setCurrentSeconds((prevTime) => prevTime + 1);
      }, 1000);
      const now = dayjs();
      setTimerStartTime(now);
    } else {
      clearInterval(intervalTimer);
    }

    if (timerStatus === 'initial') {
      setCurrentSeconds(0);
      setTimerStartTime('');
    }
    if (timerStatus === 'stopped') {
    }

    return () => clearInterval(intervalTimer);
  }, [timerStatus]);

  // The useEffect that submits the current task
  useEffect(() => {
    if (submittingTask) {
      const taskSecondsCount = currentSeconds;

      let start = dayjs(timerStartTime).format('HH:mm:ss');
      let end = dayjs().format('HH:mm:ss');
      if (isEntryValid(taskName, taskSecondsCount)) {
        const newEntry = {
          id: entriesList.length + 1,
          description: taskName,
          secondsCount: formatToHoursMinutesSeconds(taskSecondsCount),
          timerStartTime: start,
          timerEndTime: end,
        };
        console.log('Submitting the task', newEntry);
        setEntriesList([...entriesList, newEntry]);
        setCurrentSeconds(0);
        setTimerStatus('initial');
        settaskName('');
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
          value={taskName}
          onChange={(event) => settaskName(event.target.value)}
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

function isEntryValid(taskName, taskSecondsCount) {
  // if (taskName === '') return false;
  if (taskSecondsCount < 1) return false;
  return true;
}
