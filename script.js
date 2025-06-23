
let current = 1;
const audio = document.getElementById("bg-music");
audio.volume = 0.15;

function nextScreen(step) {
  const old = document.getElementById("screen" + current);
  const next = document.getElementById("screen" + step);
  if (old) {
    old.classList.remove("active");
  }
  if (next) {
    next.classList.add("active");
    next.scrollIntoView({ behavior: 'smooth' });
  }
  current = step;
}
