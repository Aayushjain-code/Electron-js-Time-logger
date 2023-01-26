import { Routes, Route } from 'react-router-dom';
import TimerPage from 'renderer/Pages/TimerPage';

const RouterElement = () => {
  return (
    <Routes>
      <Route index element={<TimerPage />} />
    </Routes>
  );
};

export default RouterElement;
