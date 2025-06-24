const drivers = [
  { route: "02", name: "RAVICHANDRAN", phone: "9944318272" },
  { route: "03", name: "MR. MAHENDRAN", phone: "9176307567" },
  { route: "04", name: "KUPPAN", phone: "9789836428" },
  { route: "05", name: "MR. MANIGANDAN", phone: "9710795080" },
  { route: "06", name: "Mr. Antony", phone: "9962463565" },
  { route: "08", name: "MR. VENKATRAMAN", phone: "N/A" },
  { route: "09", name: "MR. PACKIYARAJ", phone: "9994795591" },
  { route: "10", name: "MR. GNANASEKARAN", phone: "9159923848" },
  { route: "11", name: "JEGAN", phone: "9551718668" },
  { route: "12", name: "ELUMALAI", phone: "9499006460" },
  { route: "14", name: "MR. SANKAR", phone: "N/A" },
  { route: "15", name: "MR. SASIKUMAR", phone: "9840248842" },
  { route: "16", name: "MR. VENKATESAN", phone: "9444544223" },
  { route: "17", name: "VEEMARAJAN", phone: "9884452627" },
  { route: "18", name: "SARAVANAN", phone: "9344867563" },
  { route: "19", name: "MR. NAVEEN", phone: "N/A" },
  { route: "20", name: "MR. DHEENA DAYALAN", phone: "9003681670" },
  { route: "21", name: "Mr. JOHN AUSTIN", phone: "9841101246" },
  { route: "22", name: "MR. NIRMAL KUMAR", phone: "9043619016" },
  { route: "23", name: "MR. RANJITH KUMAR", phone: "9940249112" },
  { route: "24", name: "MR. TAMILARASAN", phone: "9597416297" },
  { route: "25", name: "NAYAGAM", phone: "9585178253" },
  { route: "26", name: "MR. SULTAN", phone: "9944030911" },
  { route: "27", name: "Mr. RAJESH", phone: "N/A" },
  { route: "28", name: "MR. SENTHIL", phone: "9003129324" },
  { route: "29", name: "SIVA", phone: "9500950475" },
  { route: "30", name: "MR. UDHAYAKUMAR", phone: "9940330284" },
  { route: "31", name: "MR. GANESH", phone: "9566412477" }
];

const listContainer = document.getElementById("drivers-list");

drivers.forEach(driver => {
  const card = document.createElement("div");
  card.className = "driver-card";

  const img = document.createElement("img");
  img.src = `images/drivers/${driver.route}.jpg`; // photo must be named by route no (e.g., 02.jpg)
  img.alt = driver.name;

  const name = document.createElement("h3");
  name.textContent = driver.name;

  const route = document.createElement("p");
  route.textContent = `Route No: ${driver.route}`;

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${driver.phone}`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(route);
  card.appendChild(phone);

  listContainer.appendChild(card);
});
