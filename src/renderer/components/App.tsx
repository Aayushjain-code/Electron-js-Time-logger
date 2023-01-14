/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import { getExportFileExcel } from 'renderer/utils';
import jsPDF from 'jspdf';
import InputPanel from './InputPanel';
import TableComponent from './TableComponent';
import 'jspdf-autotable';

export function getExportFilePDF(
  columns: string[],
  data: any[],
  fileName: string
) {
  const headerNames = columns;
  const doc = new jsPDF();
  // const compatibleData = data;
  const result = data?.map(Object.values);
  doc.autoTable({
    head: [headerNames],
    body: result,
    margin: { top: 20 },
    styles: {
      minCellHeight: 9,
      halign: 'left',
      valign: 'center',
      fontSize: 11,
    },
  });

  doc.save(`${fileName}.pdf`);

  return false;
}
export default function App() {
  const [entriesList, setEntriesList] = useState([]);

  const handleDelete = (id: string) => {
    // console.log(`Requested to delete the task with ${id}`);
    // const selectedTask = entriesList.filter((task) => task.id === id);
    // console.log(selectedTask);
    setEntriesList(entriesList.filter((task) => task.id !== id));
  };
  const columns = [
    'id',
    'description',
    'secondsCount',
    'timerStartTime',
    'timerEndTime',
  ];
  const headerColumns = [
    'id',
    'Employee Name',
    'Time Duration',
    'Start Time',
    'End Time',
  ];
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  return (
    <>
      <header>
        <h1>Time Logger Application</h1>
      </header>
      <div className="pageContent">
        <div className="counterContent">
          <InputPanel
            entriesList={entriesList}
            setEntriesList={setEntriesList}
          />
          {entriesList.length > 0 && (
            <TableComponent
              rowEntries={entriesList}
              handleDelete={handleDelete}
            />
          )}
        </div>

        <div className="utilityContent">
          {entriesList.length > 0 && (
            <button
              className="button btn-yellow"
              onClick={() => {
                getExportFileExcel(
                  headerColumns,
                  columns,
                  entriesList,
                  'timesheetexcel'
                );
              }}
            >
              Export Excel
            </button>
          )}
          {entriesList.length > 0 && (
            <button
              className="button btn-yellow "
              onClick={() => {
                getExportFilePDF(headerColumns, entriesList, 'timesheetpdf');
              }}
            >
              Export Pdf
            </button>
          )}
          <div className="currentTime">
            <span>Current Time: {time.toLocaleTimeString()}</span>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
