import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
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

  return (
    <>
      <header>
        <h1>Time Logger Application</h1>
      </header>
      <InputPanel entriesList={entriesList} setEntriesList={setEntriesList} />
      <TableComponent rowEntries={entriesList} />
    </>
  );
}
