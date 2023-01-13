/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function TimerControls({
  timerStatus,
  setTimerStatus,
  taskSubmitTrigger,
}) {
  if (timerStatus === 'initial') {
    return (
      <button
        className="button btn-primary"
        onClick={() => setTimerStatus('running')}
      >
        Start
      </button>
    );
  }

  return (
    <button
      className="button btn-red"
      onClick={() => {
        setTimerStatus('stopped');
        taskSubmitTrigger();
      }}
    >
      Stop
    </button>
  );
}
