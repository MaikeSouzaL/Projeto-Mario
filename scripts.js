let form = document.querySelector(".fale-conosco");
let modal = document.querySelector(".mascara-form");
let icon = document.querySelector("#icon");
let menu = document.querySelector(".menu-mobile");
let links = document.querySelector(".links");
let mario = document.querySelector(".mario-e-luid img");
console.log(mario);

function handleBtn() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  modal.style.visibility = "visible";
  mario.style.animation = "none";

  // Ocultar o ícone quando o formulário está aberto
  icon.style.visibility = "hidden";
}

function closeForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  modal.style.visibility = "hidden";

  // O ícone será mostrado novamente quando a transição for concluída
}

// Adicionando um ouvinte de evento de transição
form.addEventListener("transitionend", function () {
  // Verificar se o estilo left é igual a -300px após a transição
  if (form.style.left === "-300px") {
    // Se for, então pode mostrar o ícone
    icon.style.visibility = "visible";
    mario.style.animation = "growShrinkAnimation 1.5s infinite alternate";
  }
});

function handleMenu() {
  menu.style.display = "none";
  links.style.right = "0px";
  modal.style.visibility = "visible";
  mario.style.animation = "none";
}

function handleClose() {
  links.style.right = "-301px";
  menu.style.display = "block";
}

links.addEventListener("transitionend", function () {
  if (links.style.right === "-301px") {
    form.style.transition = "0.5s ease-in-out";
    modal.style.visibility = "hidden";
    mario.style.animation = "growShrinkAnimation 1.5s infinite alternate";
  }
});
