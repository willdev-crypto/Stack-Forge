const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);

  if (e.code === "Escape") {
    console.log("Você pressionou Esc");
    navPerfil.style.display = "none";
  }

  if (navPerfil.style.display === "block") {
    if (e.code === "Digit1" || e.code === "Numpad1") {
      console.log("Você pressionou a tecla one");
      linkPerfilDados.click();
    }
  } else if (e.code === "Digit1") {
    navPerfil.style.display = "block";
  }
});
