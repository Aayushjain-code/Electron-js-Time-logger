/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { IconButton, Tooltip } from '@mui/material';

export default function TimerControls({
  timerStatus,
  setTimerStatus,
  taskSubmitTrigger,
}) {
  if (timerStatus === 'initial') {
    return (
      <Tooltip title="Start">
        <IconButton onClick={() => setTimerStatus('running')}>
          <PlayCircleFilledWhiteIcon className="iconButton iconBtn-green" />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Stop">
      <IconButton
        onClick={() => {
          setTimerStatus('stopped');
          taskSubmitTrigger();
        }}
      >
        <StopCircleIcon className="iconButton iconBtn-red" />
      </IconButton>
    </Tooltip>
  );
}
