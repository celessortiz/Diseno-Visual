document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");

  // Inicial: todas bloqueadas salvo las que no tienen requisitos
  materias.forEach(materia => {
    const requisitos = materia.dataset.requisitos.split(",").filter(r => r.trim() !== "");
    if (requisitos.length === 0) {
      materia.classList.add("unlocked");
    } else {
      materia.classList.add("locked");
    }
  });

  materias.forEach(materia => {
    materia.addEventListener("click", () => {
      if (materia.classList.contains("unlocked")) {
        materia.classList.remove("unlocked");
        materia.classList.add("aprobada");
        desbloquearMaterias(materia.dataset.id);
      }
    });
  });

  function desbloquearMaterias(idMateriaAprobada) {
    materias.forEach(materia => {
      if (materia.classList.contains("locked")) {
        const requisitos = materia.dataset.requisitos.split(",").filter(r => r.trim() !== "");
        if (requisitos.every(req => {
          const reqMateria = document.querySelector(`.materia[data-id='${req}']`);
          return reqMateria && reqMateria.classList.contains("aprobada");
        })) {
          materia.classList.remove("locked");
          materia.classList.add("unlocked");
        }
      }
    });
  }
});
