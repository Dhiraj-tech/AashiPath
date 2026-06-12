const API_BASE = import.meta.env.VITE_API_BASE || "";

async function postContact(data) {
  const res = await fetch(`${API_BASE}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }

  return res.json();
}

async function health() {
  const res = await fetch(`${API_BASE}/health`);
  return res.ok;
}

export { postContact, health };
