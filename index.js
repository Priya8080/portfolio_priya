document.addEventListener("DOMContentLoaded", () => {
    const text = "Full Stack Developer";
    const el = document.getElementById("text-typing");

    let index = 0;
    let isDeleting = false;
    let speed = 120;

    function typeLoop() {
      if (!isDeleting) {
        el.textContent = text.substring(0, index++);
        if (index > text.length) {
          isDeleting = true;
          speed = 1000; 
        } else {
          speed = 120;
        }
      } else {
        el.textContent = text.substring(0, index--);
        if (index < 0) {
          isDeleting = false;
          speed = 500; 
          index = 0;
        } else {
          speed = 70;
        }
      }
      setTimeout(typeLoop, speed);
    }

    typeLoop();
  });
document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
});

