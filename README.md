# 🚌 Kings Transit
A Smart Bus Attendance and Tracking System for Kings Engineering College, including:

## ✨ Features

- ✅ Route-wise student attendance tracking
- ✅ Attendance synced to Google Sheets in real-time
- ✅ Faculty live location sharing via Google Maps link
- ✅ Bus route information with stop timings
- ✅ Searchable route stop finder
- ✅ Complaint submission system stored in Google Sheets
- ✅ Driver contact info with photos
- ✅ Beautiful UI with responsive design

---

## 📁 Folder Structure

/KEC Bus/
│
├── attendance.html/css/js
├── routes.html/css/js
├── tracking.html/css/js
├── share-location.html
├── complaint.html
├── drivers.html
├── home.html
└── assets/images (driver photos, logo)


---

## 📡 Backend Integrations

- **Google Sheets**:
  - Used for storing attendance records (per route, per date)
  - Complaints logged by students with timestamp

- **Google Apps Script**:
  - Connected via deployed Web App URLs

---

## 📱 How it Works

- Faculty selects their bus route daily and shares a live location
- Students are marked present/absent via route-based buttons
- Complaints are submitted by students using a form
- Admin/faculty can download Excel reports of attendance

---

## 🚀 Deployment

This app runs entirely on HTML/CSS/JS. To host:

### ✅ GitHub Pages:
- Push all files to your repo
- Go to repo → Settings → Pages → Select branch (`main`) → `/root`

### ✅ Android App (optional):
- Wrap this in a WebView using Android Studio

---

## 🙋 Author

Developed by **Jershon Paul Isaac**  
🎓 Kings Engineering College  
🔗 [GitHub Profile](https://github.com/jershonpaulisaac)

---

## 📌 License

MIT License – free to use, modify, and enhance for educational or institutional use.
