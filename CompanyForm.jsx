import React, { useState } from 'react';

const CompanyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedin: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      location: '',
      linkedin: '',
      email: '',
      phone: '',
      comments: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Company Name" required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn Profile" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments"></textarea>
      <button type="submit">Add Company</button>
    </form>
  );
};

export default CompanyForm;
