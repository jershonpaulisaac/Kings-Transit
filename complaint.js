document.getElementById('complaintForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const dept = document.getElementById('dept').value.trim();
  const year = document.getElementById('year').value.trim();
  const msg = document.getElementById('msg').value.trim();

  if (!name || !dept || !year || !msg) {
    document.getElementById('status').textContent = "❌ Please fill all fields.";
    return;
  }

  document.getElementById('status').textContent = "✅ Your complaint has been registered!";
  document.getElementById('complaintForm').reset();

  setTimeout(() => {
    document.getElementById('status').textContent = "";
  }, 3000);
});
