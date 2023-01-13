/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as XLSX from 'xlsx';

export function formatToHoursMinutesSeconds(totalSeconds) {
  const [hours, minutes, seconds] = extractHoursMinutesSeconds(totalSeconds);
  return `${hours}:${minutes}:${seconds}`;
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

export function getExportFileExcel(columns, data, fileName) {
  const header = columns;
  const compatibleData = data?.map((row) => {
    const obj = {};
    header.forEach((col, index) => {
      obj[col] = row[col];
    });
    return obj;
  });

  const wb = XLSX.utils.book_new();
  const ws1 = XLSX.utils.json_to_sheet(compatibleData, {
    header,
  });
  XLSX.utils.book_append_sheet(wb, ws1, 'React Table Data');
  XLSX.writeFile(wb, `${fileName}.xlsx`);
  // Returning false as downloading of file is already taken care of
  return false;
}
