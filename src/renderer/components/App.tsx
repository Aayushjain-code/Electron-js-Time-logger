import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import InputPanel from './InputPanel';
import ListPanel from './ListPanel';
import TableComponent from './TableComponent';

export default function App() {
  /*  Entries in the list have the form:
      { id: number, description: string, secondsCount: number }  */
  const [entriesList, setEntriesList] = useState([]);

  const exampleTasks: never[] = [
    // ['Example Task One', 20015, '10:28:28', '10:28:33'],
    // ['Example Task Two', 12057, '10:28:28', '10:28:33'],
    // ['Example Task Three', 3605, '10:28:28', '10:28:33'],
  ];

  useEffect(
    () =>
      setEntriesList(
        exampleTasks.map((entry, index) => {
          return {
            id: index,
            description: entry[0],
            secondsCount: entry[1],
            startTime: entry[2],
            endTime: entry[3],
          };
        })
      ),
    []
  );

  const deleteTask = (id) => {
    console.log(`Requested to delete the task with ${id}`);
    const selectedTask = entriesList.filter((task) => task.id === id);
    console.log(selectedTask);
    setEntriesList(entriesList.filter((task) => task.id !== id));
  };

  const editTask = (id, newDescription) => {
    console.log(
      `Requested to edit the task with ${id} with a new description of "${newDescription}"`
    );
    setEntriesList(
      entriesList.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
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
