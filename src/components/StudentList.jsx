// StudentList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://student-data-server.onrender.com/students').then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://student-data-server.onrender.com/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
   <div className='backdiv'>
      <div className='container'>
        <h2>Student List</h2>
        <Link to="/AddStudent">
          <button className="btn-add">Add Student</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Class-Division</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>{student.classDivision}</td>
                <td>
                  <Link to={`/edit/${student.id}`}>
                    <button className='editbtn'>Edit</button>
                  </Link>
                  <button className='deletebtn' onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </div>
  );
};

export default StudentList;
