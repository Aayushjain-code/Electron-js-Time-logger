/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
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

  const deleteTask = (id: any) => {
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
          getExportFileExcel(columns, entriesList, 'timesheetexcel');
        }}
      >
        Export Excel
      </button>
      <button
        onClick={() => {
          getExportFilePDF(columns, entriesList, 'timesheetpdf');
        }}
      >
        Export Pdf
      </button>
      <InputPanel entriesList={entriesList} setEntriesList={setEntriesList} />
      <TableComponent rowEntries={entriesList} />
    </>
  );
}
