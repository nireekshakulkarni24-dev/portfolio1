# Nireeksha Prakash Kulkarni — Personal Developer Portfolio

> **B.Tech Student in Computer Science & Data Science | Aspiring Software & AI Developer**  
> GM University, Davangere • Karnataka, India

A modern, fast, recruiter-ready developer portfolio website showcasing engineering projects, academic foundations, technical competencies, and hackathon innovations.

---

## 🌟 Key Features

- **Modern Visual Design**: Dark-first aesthetic with custom CSS tokens, optional instant Light/Dark mode switcher, subtle glassmorphism (`backdrop-filter: blur`), and glowing accent gradients.
- **100% Data-Driven Architecture (`data.js`)**: All projects, skills, education milestones, experiences, and social links are centralized in a clean, reusable data file. Add or edit items without altering HTML or CSS.
- **Interactive Project Showcase**:
  - Filterable by domains (*Agentic AI*, *AI & NLP*, *Blockchain*, *Data & Systems*).
  - Deep-dive interactive modal with problem statements, architectural diagrams, key highlights, and technology tags.
  - Featured projects include **GlowFarm (Agentic AI)**, **KalaSetu (Smart India Hackathon)**, **LandChain (Blockchain Property Register)**, **Smart Log Analyzer (Python)**, and **Railway Reservation System (FIFO Queue DSA)**.
- **Optimized Performance & Lightweight**: Pure vanilla HTML5, CSS3, and ES6+ JavaScript. Zero heavy framework baggage, zero build steps required, and instant sub-50ms loads.
- **Interactive Ambient Canvas**: 60fps lightweight particle network background with mouse repulsion that automatically pauses on background tabs and respects `prefers-reduced-motion`.
- **Comprehensive Accessibility & SEO**:
  - Full WCAG AA color contrast compliance.
  - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - OpenGraph, Twitter card metadata, and SVG favicon.
  - Accessible keyboard navigation (`Escape` closes menus and modals, visible `:focus-visible` styling).
- **Recruiter CTA & Verification**:
  - One-click Resume download (`resume.pdf`) and inline viewer.
  - Direct 1-click email copy button with animated toast feedback.
  - Validated contact form with real-time error detection.

---

## 📂 Project Structure

```text
portfolio/
├── assets/
│   ├── docs/
│   │   └── resume.pdf                 # Uploaded Resume PDF
│   └── images/
│       ├── favicon.svg                # Modern monogram SVG favicon
│       ├── profile.jpg                # Professional photograph
│       ├── project-glowfarm.svg       # GlowFarm Agentic AI preview
│       ├── project-kalasetu.svg       # KalaSetu AI Marketplace preview
│       ├── project-blockchain.svg     # LandChain Property Register preview
│       ├── project-loganalyzer.svg    # Python Log Analyzer preview
│       └── project-railway.svg        # Railway Queue DSA preview
├── public/                            # Redundant public directory for web hosts
│   ├── images/
│   │   └── profile.jpg
│   ├── favicon.svg
│   └── resume.pdf
├── app.js                             # Interactive client logic & event handlers
├── data.js                            # Reusable central portfolio content model
├── index.html                         # Semantic, accessible single-page layout
├── styles.css                         # CSS variables, glassmorphism, responsive grid
├── START.bat                          # 1-Click Windows demonstration launcher
├── .gitignore                         # Standard repository ignore configuration
└── README.md                          # Project documentation
```

---

## 🚀 Quick Start (Running Locally)

### Option 1: One-Click Windows Launcher (Recommended)
Double-click `START.bat`. The script will automatically:
1. Detect **Python** or **Node.js** in your PATH.
2. Start a local HTTP server on `http://localhost:3000`.
3. Open your default web browser automatically.
4. If neither Python nor Node is installed, it cleanly opens `index.html` directly in your browser.

### Option 2: Using Python
```bash
cd portfolio
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Using Node.js
```bash
cd portfolio
npx serve -l 3000
```

### Option 4: Direct File Open
Simply double-click `index.html` in your file explorer.

---

## 🛠️ How to Customize

All content is cleanly separated from layout and styling.

1. **Edit Personal Info, Projects, or Skills**:
   Open `data.js` and modify fields in `PORTFOLIO_DATA`. For example, to add a new project, simply append an object to `PORTFOLIO_DATA.projects`:
   ```javascript
   {
     id: "my-new-project",
     title: "Project Name",
     badge: "Hackathon Winner",
     category: "ai",
     categoryLabel: "AI & Systems",
     shortDescription: "Short summary...",
     image: "assets/images/project-preview.svg",
     highlights: ["Feature 1", "Feature 2"],
     technologies: ["Python", "FastAPI"],
     githubUrl: "https://github.com/...",
     liveUrl: "https://...",
     details: { ... }
   }
   ```
2. **Update Profile Photograph**:
   Replace `assets/images/profile.jpg` with your photo.
3. **Update Resume**:
   Replace `assets/docs/resume.pdf` with your updated resume PDF.

---

## 🌐 Deployment to GitHub Pages

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete recruiter-ready personal portfolio"
   ```
2. Add your GitHub repository remote:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to your repository settings on GitHub.
   - Navigate to **Pages** in the left sidebar.
   - Under **Build and deployment**, set the source branch to `main` and folder to `/ (root)`.
   - Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`.

---

## 📬 Contact & Connect

- **Name**: Nireeksha Prakash Kulkarni
- **College**: GM University, Davangere
- **LinkedIn**: [linkedin.com/in/nireeksha-k-626661383](https://linkedin.com/in/nireeksha-k-626661383)
- **Email**: [nireekshakulkarni24@gmail.com](mailto:nireekshakulkarni24@gmail.com)

---
*© 2026 Nireeksha Prakash Kulkarni. All rights reserved.*
