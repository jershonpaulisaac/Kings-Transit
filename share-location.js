const correctPassword = "KEC2024"; // Change as needed

// ✅ DAILY RESET CHECK
const today = new Date().toLocaleDateString(); // e.g., "6/25/2025"
const lastSavedDate = localStorage.getItem("liveLocationsDate");
if (lastSavedDate !== today) {
  localStorage.removeItem("liveLocations");
  localStorage.setItem("liveLocationsDate", today);
}

// ✅ PASSWORD VERIFY
function verifyPassword() {
  const input = document.getElementById("auth").value;
  const status = document.getElementById("auth-status");

  if (input === correctPassword) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("locationForm").style.display = "flex";
  } else {
    status.textContent = "❌ Incorrect password.";
    status.style.color = "red";
  }
}

// ✅ SUBMIT LOCATION LINK
document.getElementById("locationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const route = document.getElementById("route").value;
  const link = document.getElementById("link").value;

  const locations = JSON.parse(localStorage.getItem("liveLocations") || "{}");
  locations[route] = link;
  localStorage.setItem("liveLocations", JSON.stringify(locations));

  // Save today's date for reference
  localStorage.setItem("liveLocationsDate", today);

  document.getElementById("status").textContent = `✅ Live location for Route ${route} saved!`;
  document.getElementById("locationForm").reset();
});

// ✅ RESET ALL LINKS
document.getElementById("resetLocations").addEventListener("click", () => {
  const confirmReset = confirm("Are you sure you want to clear all shared live location links?");
  if (confirmReset) {
    localStorage.removeItem("liveLocations");
    localStorage.removeItem("liveLocationsDate");
    alert("✅ All shared location links have been cleared.");
  }
});
