import React, { useState } from 'react';
import Dashboard from '../components/User/Dashboard';
import CalendarView from '../components/User/CalendarView';

const UserPage = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Company A', lastCommunication: '5th Jan', nextCommunication: '15th Jan' },
    { id: 2, name: 'Company B', lastCommunication: '10th Jan', nextCommunication: '20th Jan' },
  ]);

  return (
    <div>
      <h1>User Page</h1>
      <Dashboard companies={companies} />
      <CalendarView />
    </div>
  );
};

export default UserPage;
