document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeInput = document.getElementById("campo-nome");
    const mensagemInput = document.getElementById("campo-mensagem");

    let temErro = false;
    let mensagensErro = [];

    if (nomeInput.value.trim() === "") {
      adicionarErro(nomeInput, "O campo Nome é obrigatório.");
      temErro = true;
    } else {
      removerErro(nomeInput);
    }

    if (mensagemInput.value.trim() === "") {
      adicionarErro(mensagemInput, "A mensagem não pode estar vazia.");
      temErro = true;
    } else {
      removerErro(mensagemInput);
    }

    if (temErro) {
      console.log("Formulário invalidado: campos obrigatórios faltando.");
    } else {
      const mensagemFinal = `Nome: ${nomeInput.value}\nMensagem: ${mensagemInput.value}`;
      window.location.href = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagemFinal)}`;
    }
  });

  function adicionarErro(inputElemento, textoErro) {
    inputElemento.classList.add("campo-erro");
    const spanErro = inputElemento.nextElementSibling;

    if (spanErro && spanErro.classList.contains("erro-mensagem")) {
      spanErro.textContent = textoErro;
      spanErro.classList.add("visivel");
    } else {
      console.error("Erro: Estrutura do HTML não possui o span de erro.");
    }
  }

  function removerErro(inputElemento) {
    inputElemento.classList.remove("campo-erro");
    const spanErro = inputElemento.nextElementSibling;

    if (spanErro && spanErro.classList.contains("erro-mensagem")) {
      spanErro.textContent = "";
      spanErro.classList.remove("visivel");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  hamburger.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

const textElement = document.getElementById("typewriter");
const fullText = "Desenvolvedor Full Stack";
let charIndex = 0;

function typeWriter() {
  if (charIndex < fullText.length) {
    textElement.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    textElement.style.opacity = "1";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
