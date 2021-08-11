import React, {useState} from 'react';
import {profileAPI} from '../../API/api';

const Records = () => {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    const data = await profileAPI.getRecordsA();
    setRecords(data);
  }

  return (
    <div>
      <h2>Records</h2>
      <button onClick={getRecords}>GET</button>
      {records.map(item =>
        <div key={item.email}>{item.email}</div>
      )}
    </div>
  );
};

export default Records;