const catalog = document.getElementById("catalog");

const items = [];

catalog.innerHTML = items.length
  ? items.map((item) => `<article>${item.title}</article>`).join("")
  : "<p>No templates promoted to the catalog yet.</p>";
