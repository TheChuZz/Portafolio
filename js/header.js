document.addEventListener("DOMContentLoaded", () => {
  let header = document.getElementById("header");

  const viewSelectors = [
    "anclaSobreMi",
    "anclaSkills",
    "anclaExperencia",
    "anclaProyectos",
    "anclaContacto",
  ];

  const sections = ["sobreMi", "skills", "experencia", "proyectos", "contacto"];

  const sectionPage = sections.map((section) =>
    document.getElementById(section)
  );

  const sectionLinks = viewSelectors.map((selector) =>
    document.getElementById(selector)
  );

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 550) {
      header.classList.remove("header-hidden");
    } else {
      header.classList.add("header-hidden");
    }

    sectionPage.forEach((section, index) => {
      let isVisible =
        section.getBoundingClientRect().bottom > 0 &&
        section.getBoundingClientRect().top <= window.innerHeight;

      if (isVisible) {
        // Remueve la clase de todos los enlaces
        sectionLinks.forEach((link) => link.classList.remove("header-active"));
        // Agrega la clase solo al enlace correspondiente a la sección actual
        sectionLinks[index].classList.add("header-active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    let start = document.getElementById("return-top");
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;

        if (scrollTop > 2000) {
            start.classList.add("show");
        } else {
            start.classList.remove("show");
        }
    });
});
