/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { useState, useEffect, useRef } from 'react';
import { getExportFileExcel } from 'renderer/utils';
import InputPanel from './InputPanel';
import TableComponent from './TableComponent';

export default function App() {
  const [entriesList, setEntriesList] = useState([]);

  const deleteTask = (id) => {
    console.log(`Requested to delete the task with ${id}`);
    const selectedTask = entriesList.filter((task) => task.id === id);
    console.log(selectedTask);
    setEntriesList(entriesList.filter((task) => task.id !== id));
  };
  const columns = [
    'id',
    'description',
    'secondsCount',
    'timerStartTime',
    'timerEndTime',
  ];

  return (
    <>
      <header>
        <h1>Time Logger Application</h1>
      </header>
      <button
        onClick={() => {
          getExportFileExcel(columns, entriesList, 'timesheet');
        }}
      >
        Export
      </button>
      <InputPanel entriesList={entriesList} setEntriesList={setEntriesList} />
      <TableComponent rowEntries={entriesList} />
    </>
  );
}
