// EditStudent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams(); 

  const [student, setStudent] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    classDivision: ''
  });

  useEffect(() => {
    axios.get(`https://student-data-server.onrender.com/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://student-data-server.onrender.com/students/${id}`, student);
      // Redirect to student list page or show success message
    } catch (error) {
      console.error('Error updating student data:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={student.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={student.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" name="mobile" value={student.mobile} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="classDivision">Class-Division:</label>
          <input type="text" id="classDivision" name="classDivision" value={student.classDivision} onChange={handleChange} />
        </div>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
