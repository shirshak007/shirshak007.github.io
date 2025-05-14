document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Load data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //Title, logo etc
            document.getElementById('site-title').textContent = data.personal.name + " | Portfolio";
            document.getElementById('logo').src = data.personal.logo;
            document.getElementById('logo-footer').src = data.personal.logo_light;
            document.getElementById('favicon').href = data.personal.favicon;
            
            // Populate personal info
            document.getElementById('name').textContent = data.personal.name;
            document.getElementById('email').textContent = data.personal.email;
            document.getElementById('mobile').textContent = data.personal.mobile;
            document.getElementById('address').textContent = data.personal.address;
            
            // Contact section
            document.getElementById('contact-mobile').textContent = data.personal.mobile;
            document.getElementById('contact-email').textContent = data.personal.email;
            document.getElementById('contact-address').textContent = data.personal.address;
            document.getElementById('contact-github').href = 'https://' + data.portfolio.github;
            document.getElementById('contact-linkedin').href = 'https://' + data.portfolio.linkedin;
  
            //About Section
            document.getElementById('email-link').href = 'mailto:' + data.personal.email;
            document.getElementById('about-me').textContent= data.personal.about;
            
            // Footer
            document.getElementById('footer-mobile').textContent = data.personal.mobile;
            document.getElementById('footer-email').textContent = data.personal.email;
            document.getElementById('footer-address').textContent = data.personal.address;
            
            // Social links
            document.getElementById('github-link').href = 'https://' + data.portfolio.github;
            document.getElementById('linkedin-link').href = 'https://' + data.portfolio.linkedin;
            
            // Stack Overflow achievements
            document.getElementById('so-answers').textContent = data.achievements.stackOverflow.acceptedAnswers;
            document.getElementById('so-badges').textContent = data.achievements.stackOverflow.badges;
            document.getElementById('so-reach').textContent = data.achievements.stackOverflow.reach;
            document.getElementById('hero-tagline').textContent = data.personal.tagline;
            document.getElementById('profile-img').src = data.personal.image;
            document.getElementById('about-img').src = data.personal.about_image;
            
            var typed = new Typed('#typewriter', {
                  strings: [data.personal.name, "a full-stack developer", "a tech savvy", "a foody"],
                  typeSpeed: 100,
                  backSpeed: 40,
                  backDelay: 1500,
                  loop: true
            });
            
            // Populate experience
            const experienceTimeline = document.getElementById('experience-timeline');
            data.experience.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
                item.innerHTML = `
                    <div class="timeline-content" data-aos="fade-up">
                        <h3>${exp.title}</h3>
                        <h4>${exp.company}</h4>
                        <p class="timeline-date">${exp.period}</p>
                        <ul>
                            ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                        </ul>
                        <p class="timeline-skills">${exp.skills}</p>
                    </div>
                `;
                experienceTimeline.appendChild(item);
            });
            
            // Populate education
            const educationTimeline = document.getElementById('education-timeline');
            data.education.forEach((edu, index) => {
                const item = document.createElement('div');
                item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
                item.innerHTML = `
                    <div class="timeline-content" data-aos="fade-up">
                        <h3>${edu.degree}</h3>
                        <h4>${edu.institution}</h4>
                        <p class="timeline-date">${edu.period}</p>
                        <p>${edu.grade}</p>
                    </div>
                `;
                educationTimeline.appendChild(item);
            });
            
            // Populate skills
            const skillsContainer = document.getElementById('skills-container');
            data.skills.forEach(skill => {
                const item = document.createElement('div');
                item.className = 'skill-item';
                item.innerHTML = `
                    <h3>${skill}</h3>
                `;
                skillsContainer.appendChild(item);
            });
            
            // Populate projects
            const projectsGrid = document.getElementById('projects-grid');
            data.projects.forEach(project => {
                const item = document.createElement('div');
                item.className = 'project-card';
                item.innerHTML = `
                    <div class="project-image">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p class="project-meta">${project.institution} | ${project.period}</p>
                    </div>
                `;
                projectsGrid.appendChild(item);
            });
            
             // In your main.js, inside the fetch().then() block:
            if (data.githubProjects) {
                const githubContainer = document.getElementById('github-projects-container');
                
                data.githubProjects.forEach(project => {
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    card.innerHTML = `
                        <div class="github-card-header">
                            <img src="assets/images/github-mark.png" alt="GitHub" class="github-logo">
                            <h3>${project.name}</h3>
                        </div>
                        <div class="github-card-body">
                            <p>${project.description}</p>
                            <div class="github-topics">
                                ${project.topics.map(topic => `
                                    <span class="github-topic">${topic}</span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="github-card-footer">
                            <a href="${project.url}" target="_blank" class="github-link">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    `;
                    githubContainer.appendChild(card);
                });
            }
            
            // Populate certificates
            const certificatesContainer = document.getElementById('certificates-container');
            data.certificates.forEach(cert => {
                const item = document.createElement('div');
                item.className = 'certificate-card';
                item.innerHTML = `
                    <h3>${cert.platform}</h3>
                    <ul>
                        ${cert.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                `;
                certificatesContainer.appendChild(item);
            });
            
            // Initialize GSAP animations after content is loaded
            initAnimations();
        })
        .catch(error => console.error('Error loading data:', error));

    function initAnimations() {
        // GSAP animations for timeline items
        gsap.utils.toArray(".timeline-item").forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8
            });
        });

        // GSAP animations for skill items
        gsap.utils.toArray(".skill-item").forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 30,
                duration: 0.5,
                delay: i * 0.1
            });
        });

        // GSAP animations for project cards
        gsap.utils.toArray(".project-card").forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.1
            });
        });

        // Hero section animation
        gsap.from(".hero-content", {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: "power3.out"
        });

        gsap.from(".hero-image", {
            duration: 1,
            x: 100,
            opacity: 0,
            ease: "power3.out",
            delay: 0.5
        });
    }
    
    
});

/*
// Initialize particles.js after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3a86ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3a86ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        }
    });
});*/
