### [Portfolio - Live Preview](https://shirshak007.github.io)
![Portfolio Screenshot](assets/images/portfolio-ss.jpg)

A modern, responsive portfolio website showcasing my projects, skills, and photography work. Built with HTML5, CSS3, JavaScript, and featuring interactive animations.

## ✨ Features

- **Modern UI Design**: Clean, professional layout with gradient accents
- **Interactive Elements**: 
  - Particle.js animated background
  - GSAP scroll animations
  - AOS (Animate On Scroll) transitions
- **Responsive**: Fully mobile-friendly design
- **Dynamic Content**: All data loaded from JSON files
- **Sections**:
  - Hero with animated introduction
  - Experience timeline
  - Skills showcase
  - GitHub projects
  - Photography gallery
  - Contact form

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: 
  - [Particles.js](https://github.com/VincentGarreau/particles.js/)
  - [GSAP](https://greensock.com/gsap/) for animations
  - [AOS](https://github.com/michalsnik/aos) for scroll animations
- **Design**: Custom CSS with Flexbox and Grid
- **Icons**: [Font Awesome](https://fontawesome.com/)

## 📂 Project Structure

<pre>
portfolio/
├── index.html
├── data.json
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── particles.js
│   └── images/
│       ├── photography/
│       └── profile.jpg
└── README.md
</pre>

## 🚀 Installation & Setup

1. Clone the repository:
<pre>
git clone https://github.com/shirshak007/shirshak007.github.io.git
</pre>

2. Navigate to project directory:
<pre>
cd portfolio
</pre>

3. Open in your browser:
- Simply open `index.html` in your preferred browser (Note: Fetch api can mot read json file, use local server)
- [Recommended] use a local server (for better performance):
<pre>
python -m http.server 8000
</pre>
Then visit `http://localhost:8000`
- Also, you can serve it using `Apache`

## 📸 Photography Section

Showcases my photography hobby with:
- Interactive category filtering
- Lazy-loaded images
- Scroll-triggered animations
- Equipment list display

## 🌟 GitHub Projects Integration

Dynamically displays my GitHub repositories with:
- Project cards with GitHub branding
- Technology tags
- Direct links to repositories
- Star and fork counts

## 📝 Customization

To update content:
1. Edit `data.json` with your information
2. Add/update images in `assets/images/`
3. Customize colors in `assets/css/style.css` (CSS variables at the top)

## 📬 Contact

- Email: [shirshak.das007@gmail.com](mailto:shirshak.das007@gmail.com)
- LinkedIn: [shirshak007](https://linkedin.com/in/shirshak007)
- GitHub: [shirshak007](https://github.com/shirshak007)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Feel free to star the repository if you find this project useful!
