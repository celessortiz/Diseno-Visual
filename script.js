document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");

  materias.forEach(materia => {
    materia.addEventListener("click", () => {
      if (materia.classList.contains("aprobada")) {
        materia.classList.remove("aprobada");
      } else {
        // Chequear requisitos
        const requisitos = materia.dataset.requisitos.split(",").filter(r => r);
        const aprobadas = [...document.querySelectorAll(".materia.aprobada")].map(m => m.dataset.id);

        const cumple = requisitos.every(r => aprobadas.includes(r));

        if (cumple) {
          materia.classList.add("aprobada");
        } else {
          materia.classList.add("bloqueada");
          setTimeout(() => materia.classList.remove("bloqueada"), 1000);
        }
      }
    });
  });
});
