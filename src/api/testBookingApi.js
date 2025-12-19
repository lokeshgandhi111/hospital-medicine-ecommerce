const API_URL = "/api";

export const createTestBooking = async (payload) => {
  const res = await fetch(`${API_URL}/test-bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to create test booking");
  }

  return res.json();
};
