# 🇫🇷 Tour Guide France

A lightweight **Progressive Web App (PWA)** that allows tourists to quickly send trip requests to their tour guide in France.

---

## ✨ Features
- 📱 Works on **any mobile device** (iPhone, Android, or desktop)
- 💡 Simple form with fields:
  - Name  
  - Mobile number  
  - From (main cities in France)  
  - To (automatically excludes selected From city)
- 📧 On submit, opens the user’s email app with all details prefilled
- 🚀 Can be **installed as an app icon** (PWA)
- 🌍 Hosted for free using **GitHub Pages**

---

## 🧩 Technology Stack
- **Frontend:** HTML, CSS, JavaScript  
- **PWA Support:** manifest.json + service-worker.js  
- **Hosting:** GitHub Pages  

No backend or database is required — simple and lightweight.

---

## 🛠️ How It Works
1. User opens the web app (e.g., `https://yourusername.github.io/tourguide-france/`)
2. Fills in:
   - Name  
   - Mobile  
   - From (dropdown)  
   - To (dropdown — excludes selected From)
3. Taps **“Send Request”**
4. The app opens the user’s email app with all details:
5. The email is sent to the tour guide’s inbox.

---

## 🌐 Live Demo
👉 [https://yourusername.github.io/tourguide-france/](https://yourusername.github.io/tourguide-france/)

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/tourguide-france.git
cd tourguide-france
