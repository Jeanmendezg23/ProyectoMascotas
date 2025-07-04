import React, { useEffect, useState } from 'react';

const MascotasList = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/mascotas/')
      .then((res) => res.json())
      .then((data) => setMascotas(data))
      .catch((err) => console.error('Error al cargar mascotas:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Listado de Mascotas</h1>
      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota.id}>
            <strong>{mascota.nombre}</strong> ({mascota.especie}) - {mascota.raza}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MascotasList;
