const API_URL = 'http://127.0.0.1:8000/api/mascotas/';


export async function fetchMascotas() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener mascotas');
    return await response.json();
  } catch (error) {
    console.error('Error al conectar con la API:', error);
    return [];
  }
}
