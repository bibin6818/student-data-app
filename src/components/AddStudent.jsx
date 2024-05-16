// AddStudent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css'; 

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    classDivision: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://student-data-server.onrender.com/students', student);
      // Handle success (e.g., show a success message)
      // Redirect to student list page or other desired page
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Student ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={student.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={student.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="classDivision">Class-Division:</label>
          <input
            type="text"
            id="classDivision"
            name="classDivision"
            value={student.classDivision}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
