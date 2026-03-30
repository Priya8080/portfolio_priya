document.addEventListener("DOMContentLoaded", () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");

    // Check for saved theme safely
    let savedTheme = "light";
    try {
        savedTheme = localStorage.getItem("theme") || "light";
    } catch(e) { /* ignore */ }
    html.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        html.setAttribute("data-theme", newTheme);
        try {
            localStorage.setItem("theme", newTheme);
        } catch(e) { /* ignore */ }
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    }

    // --- Typing Effect ---
    const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Web Enthusiast"];
    const typingEl = document.getElementById("text-typing");

    if (typingEl) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let speed = 100;

        function typeLoop() {
            const currentRole = roles[roleIndex];
            
            if (!isDeleting) {
                typingEl.textContent = currentRole.substring(0, charIndex++);
                if (charIndex > currentRole.length) {
                    isDeleting = true;
                    speed = 2000; // Pause at end
                } else {
                    speed = 100;
                }
            } else {
                typingEl.textContent = currentRole.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    speed = 500; 
                    charIndex = 0;
                } else {
                    speed = 50;
                }
            }
            setTimeout(typeLoop, speed);
        }
        typeLoop();
    }

    // --- Scroll Reveal ---
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(el => revealOnScroll.observe(el));

    // --- Form Handling ---
    const contactForm = document.getElementById("contact-form");
    const statusMsg = document.getElementById("status-msg");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Simple Email Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                showStatus("Please enter a valid email address.", "#dc3545");
                return;
            }
            
            showStatus("Sending...", "var(--accent-color)");

            fetch("https://formsubmit.co/ajax/priya0a23@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _subject: "New Message from " + name
                })
            })
            .then(response => response.json())
            .then(data => {
                showStatus("Message Sent Successfully! ✅", "#28a745");
                contactForm.reset();
                setTimeout(() => { statusMsg.innerText = ""; }, 5000);
            })
            .catch(error => {
                showStatus("Failed to send message. Please try again.", "#dc3545");
                console.error("Error:", error);
            });
        });

        function showStatus(text, color) {
            statusMsg.innerText = text;
            statusMsg.style.color = color;
        }
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = mobileMenuBtn.querySelector("i");

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
            
            // Toggle between bars and xmark icons
            if (navLinks.classList.contains("active")) {
                menuIcon.classList.replace("fa-bars", "fa-xmark");
            } else {
                menuIcon.classList.replace("fa-xmark", "fa-bars");
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove("active");
                if (menuIcon.classList.contains("fa-xmark")) {
                    menuIcon.classList.replace("fa-xmark", "fa-bars");
                }
            }
        });
    }

    // --- Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu when a link is clicked
            if (navLinks) {
                navLinks.classList.remove("active");
                menuIcon.classList.replace("fa-xmark", "fa-bars");
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});


