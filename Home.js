const text = "DevOps and Cloud Engineer";
const speed = 60;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll(".project").forEach(project => {
    observer.observe(project);
  });
});
