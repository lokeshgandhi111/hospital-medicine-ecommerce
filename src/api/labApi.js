const API_URL = "/api/labs";

export const fetchLabs = async (city) => {
  const url = city ? `${API_URL}?city=${encodeURIComponent(city)}` : API_URL;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch labs");
  return res.json();
};

export const fetchLabById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch lab details");
  return res.json();
};
