// src/components/DeleteStudent.jsx

import React from 'react';
import axios from 'axios';

const DeleteStudent = ({ match, history }) => {
  const studentId = match.params.id;

  const handleDelete = async () => {
    try {
      await axios.delete(`https://student-data-server.onrender.com/students/${studentId}`);
      history.push('/'); // Redirect to student list
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete this student?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteStudent;
