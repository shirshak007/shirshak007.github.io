
    document.addEventListener('DOMContentLoaded', function() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Render Experience
                const experienceContainer = document.getElementById('experience-timeline');
                data.experience.forEach(item => {
                    const experienceItem = document.createElement('div');
                    experienceItem.classList.add('timeline-item');
                    experienceItem.innerHTML = `
                        <h3>${item.title}</h3>
                        <p>${item.company}</p>
                        <p>${item.duration}</p>
                        <p>${item.description}</p>
                    `;
                    experienceContainer.appendChild(experienceItem);
                });

                // Render Education
                const educationContainer = document.getElementById('education-timeline');
                data.education.forEach(item => {
                    const educationItem = document.createElement('div');
                    educationItem.classList.add('timeline-item');
                    educationItem.innerHTML = `
                        <h3>${item.degree}</h3>
                        <p>${item.institution}</p>
                        <p>${item.year}</p>
                    `;
                    educationContainer.appendChild(educationItem);
                });

                // Render Skills
                const skillsContainer = document.getElementById('skills-container');
                data.skills.forEach(skill => {
                    const skillItem = document.createElement('div');
                    skillItem.classList.add('skill-item');
                    skillItem.textContent = skill;
                    skillsContainer.appendChild(skillItem);
                });

                // Render Projects
                const projectsGrid = document.getElementById('projects-grid');
                data.projects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.classList.add('project-item');
                    projectItem.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    `;
                    projectsGrid.appendChild(projectItem);
                });

                // Render Certificates
                const certificatesContainer = document.getElementById('certificates-container');
                data.certificates.forEach(cert => {
                    const certificateItem = document.createElement('div');
                    certificateItem.classList.add('certificate-item');
                    certificateItem.innerHTML = `
                        <h3>${cert.name}</h3>
                        <p>${cert.institution}</p>
                    `;
                    certificatesContainer.appendChild(certificateItem);
                });

                // Render Achievements
                const soAnswers = document.getElementById('so-answers');
                const soBadges = document.getElementById('so-badges');
                const soReach = document.getElementById('so-reach');
                soAnswers.textContent = data.achievements.soAnswers;
                soBadges.textContent = data.achievements.soBadges;
                soReach.textContent = data.achievements.soReach;

                // Render Contact Info
                document.getElementById('contact-mobile').textContent = data.personal.mobile;
                document.getElementById('contact-email').textContent = data.personal.email;
                document.getElementById('contact-address').textContent = data.personal.address;
                document.getElementById('contact-github').href = data.portfolio.github;
                document.getElementById('contact-linkedin').href = data.portfolio.linkedin;
            })
            .catch(error => console.error('Error loading data:', error));
    });
