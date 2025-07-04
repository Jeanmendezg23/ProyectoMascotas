import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function MascotaForm() {
  const [mascota, setMascota] = useState({ nombre: '', tipo: '', edad: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/mascotas/${id}/`)
        .then(res => setMascota(res.data));
    }
  }, [id]);

  const handleChange = e => setMascota({ ...mascota, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      axios.put(`http://127.0.0.1:8000/api/mascotas/${id}/`, mascota)
        .then(() => navigate('/'));
    } else {
      axios.post('http://127.0.0.1:8000/api/mascotas/', mascota)
        .then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar' : 'Crear'} Mascota</h2>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nombre" value={mascota.nombre} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Tipo</label>
        <input type="text" className="form-control" name="tipo" value={mascota.tipo} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input type="number" className="form-control" name="edad" value={mascota.edad} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">Guardar</button>
    </form>
  );
}

export default MascotaForm;