// Daily reset
const today = new Date().toLocaleDateString();
const lastDate = localStorage.getItem('liveLocationsDate');

if (lastDate !== today) {
  localStorage.removeItem('liveLocations');
  localStorage.setItem('liveLocationsDate', today);
}

const routes = [
  "02", "03", "04", "05", "06", "08", "09", "10", "11", "12",
  "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
  "24", "25", "26", "27", "28", "29", "30", "31"
];

window.onload = () => {
  const container = document.getElementById("bus-buttons");
  const liveLinks = JSON.parse(localStorage.getItem("liveLocations") || "{}");

  routes.forEach(route => {
    const btn = document.createElement("button");
    btn.textContent = `Route ${route}`;

    if (liveLinks[route]) {
      btn.onclick = () => {
        window.open(liveLinks[route], "_blank");
      };
    } else {
      btn.disabled = true;
      btn.title = "Live location not yet shared";
    }

    container.appendChild(btn);
  });
};
