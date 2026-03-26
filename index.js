document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Web Enthusiast"];
    const el = document.getElementById("text-typing");

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;

    function typeLoop() {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        el.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          speed = 2000; // Pause at end
        } else {
          speed = 100;
        }
      } else {
        el.textContent = currentRole.substring(0, charIndex--);
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
  });
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_zgj2blz", "template_v1g7iuc", {
    name: name.value,
    email: email.value,
    message: message.value,
  }).then(() => {
    document.getElementById("status-msg").innerText = "Message Sent Successfully ✅";

    // Clear Form
    this.reset();
  });
});


