const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export const fetchMedicines = async () => {
  try {
    const response = await fetch(`${API_URL}/medicines`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching medicines:', error);
    throw error;
  }
};

export const fetchMedicineById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/medicines/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching medicine with id ${id}:`, error);
    throw error;
  }
};

