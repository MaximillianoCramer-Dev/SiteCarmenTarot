document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("section"));
    const scrollArrow = document.getElementById("scrollArrow");
  
    let currentSectionIndex = 0;
  
    scrollArrow.addEventListener("click", () => {
      currentSectionIndex++;
      if (currentSectionIndex >= sections.length) {
        currentSectionIndex = 0; // Volta ao topo
      }
  
      const nextSection = sections[currentSectionIndex];
      nextSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  