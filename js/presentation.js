document.addEventListener("DOMContentLoaded", () => {
  const presentation = document.getElementById("presentation");
  const photoPresentation = document.getElementById("photoPresentation");

  // Función para verificar la visibilidad y aplicar animaciones
  const checkVisibility = () => {
    const presentationVisible =
      presentation.getBoundingClientRect().bottom > 0 &&
      presentation.getBoundingClientRect().top <= window.innerHeight;

    const photoVisible =
      photoPresentation.getBoundingClientRect().bottom > 0 &&
      photoPresentation.getBoundingClientRect().top <= window.innerHeight;

    if (presentationVisible) {
      presentation.classList.add("showAnimationPresentation");
    } else {
      presentation.classList.remove("showAnimationPresentation");
    }

    if (photoVisible) {
      photoPresentation.classList.add("showAnimationPhothoPresentation");
    } else {
      photoPresentation.classList.remove("showAnimationPhothoPresentation");
    }
  };

  // Verificar visibilidad al cargar la página
  checkVisibility();

  // Verificar visibilidad en el evento scroll
  window.addEventListener("scroll", checkVisibility);

  //----------------------------------------------------------

  const mainTitles = document.querySelectorAll(".titulos");

  const isVisible = () => {
    mainTitles.forEach((title) => {
      const titleVisible =
        title.getBoundingClientRect().bottom > 0 &&
        title.getBoundingClientRect().top <= window.innerHeight;

      if (titleVisible) {
        title.classList.add("titleAnimatio");
      } else {
        title.classList.remove("titleAnimatio");
      }
    });
  };
});
