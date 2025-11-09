
//dark mode
const check = document.getElementById("check");
check.addEventListener("change", () =>
    document.body.classList.toggle("dark", check.checked)
);



document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('darkToggle');
    const sun = document.getElementById('sunIcon');
    const moon = document.getElementById('moonIcon');
    let animating = false;
    let isDark = false;

    btn.addEventListener('click', () => {
        if (animating) return;
        animating = true;

        const current = isDark ? moon : sun;
        const next = isDark ? sun : moon;

        current.style.transform = 'translate(-50%,-50%) rotate(180deg)';
        current.style.transition = 'transform 1s ease';

        setTimeout(() => {
            next.style.transition = 'none';
            next.style.transform = 'translate(-240%,-240%) rotate(180deg)';
            next.style.opacity = '1';
            current.style.opacity = '0';

            document.body.classList.toggle('dark-mode');
            isDark = !isDark;

            next.style.transition = 'transform 1s ease';
            next.style.transform = 'translate(-50%,-50%) rotate(360deg)';

            setTimeout(() => {
                next.style.transform = 'translate(-50%,-50%) rotate(0)';
                animating = false;
            }, 260);
        }, 260);
    });
});
//dark mode fim






// Carrega tema do localStorage
document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema");
  if (tema === "dark") {
    document.body.classList.add("dark");
    check.checked = true;
    sun.style.opacity = "1";
    moon.style.opacity = "0";
  } else {
    document.body.classList.remove("dark");
    check.checked = false;
    sun.style.opacity = "0";
    moon.style.opacity = "1";
  }
});

check.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", check.checked);
  localStorage.setItem("tema", check.checked ? "dark" : "light");
});

// MODAL DE ENVIO DE FORMULÁRIO
const form = document.querySelector("form");
const modalHTML = document.createElement("dialog");
modalHTML.id = "modalSucesso";
modalHTML.innerHTML = `
  <p>Formulário enviado com sucesso!</p>
  <button id="fecharModal">Fechar</button>
`;
document.body.appendChild(modalHTML);
const modal = document.getElementById("modalSucesso");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  try {
    

    modal.showModal();
    form.reset();
  } catch (err) {
    alert("Erro ao enviar o formulário.");
  }
});

document.getElementById("fecharModal").addEventListener("click", () => {
  modal.close();
});

// Mascara telefone
const telefone = document.getElementById("telefone");
telefone.addEventListener("input", () => {
  let t = telefone.value.slice(0,16);
  if(t[0] !== "(" && t[0] !== undefined) t = "(" + t[0] + t.slice(1);
  if(t[3] !== ")" && t[3] !== undefined) t = t.slice(0,3) + ") " + t[3] + " " + t.slice(4);
  if(t[11] !== "-" && t[11] !== undefined) t = t.slice(0,11) + "-" + t[11] + t.slice(12);
  telefone.value = t;
});

// Permitir apenas letras no nome
const nome = document.getElementById("name");
nome.addEventListener("input", function() {
  this.value = this.value.replace(/[^a-zA-Z\s]/g,'');
});

// Fundo animado
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const wavePath = document.getElementById("wavePath");
  if(!wavePath) return;
  const offset = Math.min(scrollY * 0.4, 250);
  const newPath = `
    M0,${60 - offset / 3} 
    C300,${160 - offset / 2} ${700 + offset / 1.5},${220 + offset / 3} ${1100 + offset / 1.5},${140 - offset / 1.5}
    C${1300 + offset / 2},${100 - offset / 2} 1440,${180 - offset / 1.8} 1440,${220 - offset / 2}
    L1440,320 L0,320 Z
  `;
  wavePath.setAttribute("d", newPath);
});

// Skills tooltips
function updateTooltipDirection() {
  const cards = document.querySelectorAll(".card");
  const center = window.innerWidth / 2;
  cards.forEach(card => {
    const tooltip = card.querySelector(".tooltiptext");
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    tooltip.classList.remove("tooltip-left", "tooltip-right");
    tooltip.classList.add(cardCenter > center ? "tooltip-left" : "tooltip-right");
  });
}
window.addEventListener("resize", updateTooltipDirection);
setInterval(updateTooltipDirection, 500);
updateTooltipDirection();































//modal
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('meuFormulario');
  const modal = document.getElementById('modalSucesso');
  const fechar = document.getElementById('fecharModal');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // impede o reload da página

    try {
      // Envia via fetch (Formspree)
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      // Mostra o modal
      modal.showModal();
      form.reset();
    } catch (error) {
      alert('Erro ao enviar o formulário.');
    }
  });

  fechar.addEventListener('click', () => modal.close());
});
//fim modal


















// fundo animado
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const wavePath = document.getElementById('wavePath');

  if (wavePath) {
    const offset = Math.min(scrollY * 0.4, 250);

    const newPath = `
      M0,${60 - offset / 3} 
      C300,${160 - offset / 2} ${700 + offset / 1.5},${220 + offset / 3} ${1100 + offset / 1.5},${140 - offset / 1.5}
      C${1300 + offset / 2},${100 - offset / 2} 1440,${180 - offset / 1.8} 1440,${220 - offset / 2}
      L1440,320 L0,320 Z
    `;

    wavePath.setAttribute('d', newPath);
  }
});
//fundo animado fim
















//skills
    function updateTooltipDirection() {
        const cards = document.querySelectorAll(".card");
        const center = window.innerWidth / 2;
      
        cards.forEach(card => {
          const tooltip = card.querySelector(".tooltiptext");
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
      
          tooltip.classList.remove("tooltip-left", "tooltip-right");
          if (cardCenter > center) {
            tooltip.classList.add("tooltip-left");
          } else {
            tooltip.classList.add("tooltip-right");
          }
        });
      }
      
      window.addEventListener("resize", updateTooltipDirection);
      setInterval(updateTooltipDirection, 500);
      updateTooltipDirection();
      //skills fim