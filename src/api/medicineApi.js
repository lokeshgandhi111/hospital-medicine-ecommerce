const API_URL = "/api";

export const fetchMedicines = async () => {
  const res = await fetch(`${API_URL}/medicines`);
  if (!res.ok) throw new Error("Failed to fetch medicines");
  return res.json();
};

export const fetchMedicineById = async (id) => {
  const res = await fetch(`${API_URL}/medicines/${id}`);
  if (!res.ok) throw new Error("Failed to fetch medicine");
  return res.json();
};
