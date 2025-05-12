const texto = "Bem-vinda ao escritório Helena Carvalho, Advocacia especializada em justiça com excelência, Sou Helena Carvalho, advogada, reconhecida por sua expertise, dedicação e brilhante atuação na área jurídica. Com profundo conhecimento técnico e uma abordagem humanizada, ofereço soluções estratégicas e personalizadas, sempre comprometida com a excelência e os melhores interesses de seus clientes. Com ética, profissionalismo e capacidade de alcançar resultados positivos, destaco-me como uma das mais competentes e confiáveis profissionais do ramo do Direito.";
const elemento = document.getElementById("typewriter");
let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 100); // velocidade da digitação (ms)
  }
}

window.addEventListener("load", digitar);

// Ativando o menu mobile

function toggleMenu() {
    const menu = document.getElementById("menu-principal");
    const menuIcon = document.getElementById("menu-hamburguer");
    const closeIcon = document.getElementById("menuX");
  
    const isActive = menu.classList.contains("ativo");
  
    if (isActive) {
      // ANIMAÇÃO DE SAÍDA
      menu.classList.remove("ativo");
      menu.classList.add("saindo");
  
      // Espera a animação terminar pra esconder
      setTimeout(() => {
        menu.classList.remove("saindo");
        menu.style.display = "none";
      }, 400); // tempo da animação
  
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      // ANIMAÇÃO DE ENTRADA
      menu.style.display = "flex";
      menu.classList.add("ativo");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }
