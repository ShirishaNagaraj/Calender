import React, { useState } from 'react';
import CompanyList from '../components/Admin/CompanyList';
import CompanyForm from '../components/Admin/CompanyForm';

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);

  const addCompany = (companyData) => {
    setCompanies([...companies, { ...companyData, id: companies.length + 1 }]);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <CompanyForm onSubmit={addCompany} />
      <CompanyList companies={companies} />
    </div>
  );
};

export default AdminPage;
