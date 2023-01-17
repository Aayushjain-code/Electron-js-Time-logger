/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import InputPanel from './InputPanel';
import TableComponent from './TableComponent';
import Utilities from './Utilities';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [entriesList, setEntriesList] = useState([]);

  const handleDelete = (id: string) => {
    // console.log(`Requested to delete the task with ${id}`);
    // const selectedTask = entriesList.filter((task) => task.id === id);
    // console.log(selectedTask);
    setEntriesList(entriesList.filter((task) => task.id !== id));
  };

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  return (
    <>
      {' '}
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        limit={1}
        autoClose={2000}
      />
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
      </div>
      <footer>
        <Utilities entriesList={entriesList} time={time} />
      </footer>
    </>
  );
}
