const API_URL = 'http://localhost:5000/api/labs';

export const fetchLabs = async (city) => {
  try {
    const url = city ? `${API_URL}?city=${encodeURIComponent(city)}` : API_URL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch labs');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchLabById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch lab details');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
