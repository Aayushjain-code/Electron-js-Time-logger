import React, { useEffect, useState } from 'react';

const TopAppBar = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });
  return (
    <>
      <div className="TopAppBar">
        <h1>Time Logger Application</h1>
        <span>Current Time: {time.toLocaleTimeString()}</span>
      </div>
    </>
  );
};

export default TopAppBar;
