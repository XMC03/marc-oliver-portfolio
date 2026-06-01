# Marc Oliver Cataniag — Portfolio (React)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your images
Copy your images from the original `Images/` folder into `src/assets/`:

| Original file         | Goes to                    |
|-----------------------|----------------------------|
| Images/profile.jpg    | src/assets/profile.jpg     |
| Images/html.png       | src/assets/html.png        |
| Images/programming.png| src/assets/programming.png |
| Images/hardware.png   | src/assets/hardware.png    |
| Images/debugging.png  | src/assets/debugging.png   |
| Images/project1.png   | src/assets/project1.png    |
| Images/project2.png   | src/assets/project2.png    |
| Images/project3.png   | src/assets/project3.png    |
| Images/contact.png    | src/assets/contact.png     |

### 3. Run locally
```bash
npm start
# Opens at http://localhost:3000
```

### 4. Deploy to Vercel (Website method)
1. Push this folder to GitHub
2. Go to https://vercel.com → New Project → Import your repo
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy** ✓

### 5. Deploy to Vercel (CMD method)
```bash
npm install -g vercel
vercel
```

---

## Project Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/            ← your images go here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx       ← typing effect
│   │   ├── About.jsx
│   │   ├── Skills.jsx     ← clickable cards + modal
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx            ← scroll reveal + back-to-top
│   ├── index.js
│   └── index.css          ← your original style.css (unchanged)
├── vercel.json
└── package.json
```
