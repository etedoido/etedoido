
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Contador de tempo juntos
const dataInicio = new Date("2022-06-12T00:00:00");
const contadorEl = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contadorEl.innerText = `Estamos juntos há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💘`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
