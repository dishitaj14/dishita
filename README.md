# Dishita Jain — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website built for **Dishita Jain**, 1st-year B.Tech Computer Science Engineering student at **JECRC University, Jaipur**.

---

## 🌟 Highlights of the Portfolio

- **Zero-Dependency Architecture**: Built with pure semantic HTML5, modern CSS3 (Custom Properties, Glassmorphism, Responsive Grid/Flexbox), and Vanilla JavaScript. Runs directly in any web browser without needing Node.js or any build step.
- **Modern & Professional Tech Aesthetic**: Deep navy and slate background (`#070B19`), vibrant electric cyan and purple accents, subtle glowing glassmorphism cards, and clean typography with Google Fonts (*Plus Jakarta Sans* & *Fira Code*).
- **Interactive Features**:
  - Dynamic Typewriter text in hero section.
  - Interactive developer code terminal showcasing Dishita's tech stack.
  - Vertical timeline for academic qualifications.
  - Categorized skill cards with filter tabs (All, Technical, Soft, Creative).
  - Project showcase cards with GitHub and Live Demo action buttons.
  - Structured certifications and achievement milestone placeholders.
  - Interactive contact form with real-time feedback toast notification.
  - Resume preview and print-to-PDF modal.
  - Floating back-to-top button and mobile hamburger drawer.

---

## 📁 Project Structure

```
dishita-portfolio/
│
├── index.html              # Main HTML5 webpage containing all sections
├── css/
│   └── style.css           # Modern styles, variables, animations, and responsive media queries
├── js/
│   └── main.js             # Interactive JavaScript (typing effect, filters, modal, toast)
├── assets/
│   └── favicon.svg         # Modern geometric monogram logo (<DJ />)
└── README.md               # Quick setup and customization guide
```

---

## 🚀 How to Run the Website Locally

You can open the website instantly without installing any server or software:

1. Double-click **`index.html`** in File Explorer.
2. It will open immediately in your default browser (Chrome, Edge, Firefox, Brave, Safari, etc.).
3. Everything (styles, fonts, icons, interactions) will work seamlessly!

---

## ✏️ How to Customize Your Personal Information

All placeholders in `index.html` are clearly marked with comments (`<!-- EDIT HERE -->`). Here is how you can update them:

### 1. Update Your Email Address
In `index.html`, search for `dishita.jain.placeholder@example.com` and replace it with your real email address:
```html
<div class="contact-item-val">yourname@gmail.com</div>
```

### 2. Update Your GitHub & LinkedIn Links
Search for `[YOUR GITHUB LINK]` and `[YOUR LINKEDIN LINK]` in `index.html`:
- Replace `https://github.com/` with your actual GitHub username profile (e.g. `https://github.com/dishita-jain`).
- Replace `https://linkedin.com/` with your actual LinkedIn profile link.

### 3. Add Real Certifications & Achievements
In the **Certifications & Achievements** section, find any `.cert-card` and replace:
- `[Certification Name]` with your actual course title (e.g., *CS50: Introduction to Computer Science* or *Python for Beginners*).
- `Issuing Organization / Platform` with *Coursera*, *HackerRank*, *JECRC University*, etc.
- Update the year and description.

### 4. Add Your Real Resume PDF
1. Place your resume PDF in the portfolio folder (e.g. name it `Dishita_Jain_Resume.pdf`).
2. In `index.html`, you can update the Resume button or modal links to point directly to:
   ```html
   <a href="Dishita_Jain_Resume.pdf" download class="btn btn-primary btn-sm">Download Resume PDF</a>
   ```

---

## 🌐 How to Deploy Your Website Online (Free)

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub account at [github.com](https://github.com) if you haven't already.
2. Create a new public repository named `portfolio` or `dishita-portfolio`.
3. Upload all the files from this folder (`index.html`, `css/`, `js/`, `assets/`, `README.md`) to the repository.
4. In your GitHub repository, go to **Settings** > **Pages**.
5. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
6. Within 1-2 minutes, GitHub will give you a live URL: `https://yourusername.github.io/portfolio/`!

### Option 2: Netlify Drop (Instant Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `dishita-portfolio` folder into the upload box.
3. Your site goes live instantly with a free HTTPS URL!

---

## 📄 License & Attribution
Designed and built for Dishita Jain. All rights reserved &copy; 2026.
