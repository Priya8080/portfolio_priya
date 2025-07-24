const text = "Web Developer";
const typed = document.querySelector(".text");
let index = 0;

function typeLoop() {
  if (index <= text.length) {
    typed.textContent = text.slice(0, index);
    index++;
    setTimeout(typeLoop, 200); 
  } else {
    setTimeout(() => {
      typed.textContent = "";
      index = 0;
      typeLoop();
    }, 1000); 
  }
}
typeLoop();
