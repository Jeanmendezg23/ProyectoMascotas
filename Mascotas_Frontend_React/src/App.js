import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MascotaList from './components/MascotaList';
import MascotaForm from './components/MascotaForm';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MascotaList />} />
          <Route path="/crear" element={<MascotaForm />} />
          <Route path="/editar/:id" element={<MascotaForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;