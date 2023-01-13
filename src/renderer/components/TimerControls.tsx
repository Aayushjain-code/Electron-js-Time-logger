/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { IconButton } from '@mui/material';

export default function TimerControls({
  timerStatus,
  setTimerStatus,
  taskSubmitTrigger,
}) {
  if (timerStatus === 'initial') {
    return (
      <IconButton onClick={() => setTimerStatus('running')}>
        <PlayCircleFilledWhiteIcon className="iconButton iconBtn-green" />
      </IconButton>
    );
  }

  return (
    <IconButton
      onClick={() => {
        setTimerStatus('stopped');
        taskSubmitTrigger();
      }}
    >
      <StopCircleIcon className="iconButton iconBtn-red" />
    </IconButton>
  );
}
