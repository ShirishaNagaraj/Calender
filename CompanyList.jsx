import React from 'react';

const CompanyList = ({ companies }) => {
  return (
    <div>
      <h2>Company List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>LinkedIn Profile</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td><a href={company.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></td>
              <td>{company.email}</td>
              <td>{company.phone}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
