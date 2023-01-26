import { Routes, Route } from 'react-router-dom';
import DummyPage from 'renderer/Pages/DummyPage';
import TimerPage from 'renderer/Pages/TimerPage';

const RouterElement = () => {
  return (
    <Routes>
      <Route index element={<TimerPage />} />
      <Route path="timer" element={<TimerPage />} />
      <Route path="/dummy" element={<DummyPage />} />
    </Routes>
  );
};

export default RouterElement;
