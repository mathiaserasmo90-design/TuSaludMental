const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".legal-sidebar a");

/* ACTIVO */
window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach(section=>{
    const top = section.offsetTop - 150;
    if(window.scrollY >= top){
      current = section.id;
    }
  });

  links.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

});

/* BOTÓN */
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{
  btn.style.display = window.scrollY > 400 ? "block" : "none";
});

btn.addEventListener("click", ()=>{
  window.scrollTo({ top:0, behavior:"smooth" });
});