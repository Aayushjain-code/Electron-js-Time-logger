/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */

export function formatToHoursMinutesSeconds(totalSeconds) {
  const [hours, minutes, seconds] = extractHoursMinutesSeconds(totalSeconds);
  return `${hours}:${minutes}:${seconds}s`;
}

export function extractHoursMinutesSeconds(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = totalSeconds % 60;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return [hours, minutes, seconds];
}
