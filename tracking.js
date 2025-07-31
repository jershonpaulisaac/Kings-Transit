const routeLinks = {
  "02": "https://maps.app.goo.gl/87vbTZbDQZ1Z4VEo7",
  "03": "https://maps.app.goo.gl/example03",
  "04": "https://maps.app.goo.gl/example04",
  "05": "https://maps.app.goo.gl/example05",
  "06": "https://maps.app.goo.gl/example06",
  "08": "https://maps.app.goo.gl/example08",
  "09": "https://maps.app.goo.gl/example09",
  "10": "https://maps.app.goo.gl/example10",
  "11": "https://maps.app.goo.gl/example11",
  "12": "https://maps.app.goo.gl/example12",
  "14": "https://maps.app.goo.gl/example14",
  "15": "https://maps.app.goo.gl/example15",
  "16": "https://maps.app.goo.gl/example16",
  "17": "https://maps.app.goo.gl/example17",
  "18": "https://maps.app.goo.gl/example18",
  "19": "https://maps.app.goo.gl/example19",
  "20": "https://maps.app.goo.gl/example20",
  "21": "https://maps.app.goo.gl/example21",
  "22": "https://maps.app.goo.gl/example22",
  "23": "https://maps.app.goo.gl/example23",
  "24": "https://maps.app.goo.gl/example24",
  "25": "https://maps.app.goo.gl/example25",
  "26": "https://maps.app.goo.gl/example26",
  "27": "https://maps.app.goo.gl/example27",
  "28": "https://maps.app.goo.gl/example28",
  "29": "https://maps.app.goo.gl/example29",
  "30": "https://maps.app.goo.gl/example30",
  "31": "https://maps.app.goo.gl/example31",
};

function openLocation(routeNo) {
  const link = routeLinks[routeNo];
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Live location not available for Route " + routeNo);
  }
}
