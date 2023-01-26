/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import InputPanel from './InputPanel';
import TableComponent from './TableComponent';
import Utilities from './Utilities';
import 'react-toastify/dist/ReactToastify.css';

export default function TimerPage() {
  const [entriesList, setEntriesList] = useState([]);

  const handleDelete = (id: string) => {
    setEntriesList(entriesList.filter((task) => task.id !== id));
  };

  return (
    <>
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
        <Utilities entriesList={entriesList} />
      </footer>
    </>
  );
}
