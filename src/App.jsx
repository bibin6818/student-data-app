// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import DeleteStudent from './components/DeleteStudent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/delete/:id" element={<DeleteStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
