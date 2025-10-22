document.addEventListener("DOMContentLoaded", function () {
  const fechaBoda = new Date("2026-02-21T19:30:00").getTime();

  function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) {
      document.getElementById("contador").innerHTML = "¡Hoy es el gran día!";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias
      .toString()
      .padStart(2, "0");
    document.getElementById("horas").textContent = horas
      .toString()
      .padStart(2, "0");
    document.getElementById("minutos").textContent = minutos
      .toString()
      .padStart(2, "0");
    document.getElementById("segundos").textContent = segundos
      .toString()
      .padStart(2, "0");
  }

  actualizarContador();
  setInterval(actualizarContador, 1000); // Ahora se actualiza cada segundo
});

// Ver hospedajes
const btnHospedajes = document.getElementById("btn-hospedajes");

btnHospedajes.addEventListener("click", function () {
  const contentHospedaje = document.getElementById("content-hospedaje");

  // Agregar animación de expansión
  btnHospedajes.classList.add("expand-animation");

  setTimeout(() => {
    btnHospedajes.classList.remove("expand-animation");
  }, 400);

  if (contentHospedaje.classList.contains("content-hospedaje-none")) {
    contentHospedaje.classList.remove("content-hospedaje-none");
    contentHospedaje.classList.add("content-hospedaje");
    btnHospedajes.textContent = "Ocultar Hospedajes";
  } else {
    contentHospedaje.classList.remove("content-hospedaje");
    contentHospedaje.classList.add("content-hospedaje-none");
    btnHospedajes.textContent = "Ver Hospedajes";
  }
});

// Animaciones de scroll
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .zoom-in, .fade-left, .fade-right"
  );

  animatedElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animate");
    }
  });
}

// Agregar event listener para scroll
window.addEventListener("scroll", handleScrollAnimations);

// Ejecutar una vez al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  handleScrollAnimations();
});
