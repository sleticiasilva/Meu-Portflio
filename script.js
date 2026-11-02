
const CONFIG = {
  nome: "Letícia Frederico",
  whatsapp: "5511947733732", 
  email: "leticiafrederico599@gmail.com",
  auraUrl: "https://landinpageestetica.vercel.app/" 
};

document.querySelectorAll(".brand").forEach((brand) => {
  brand.innerHTML = `${CONFIG.nome.toUpperCase()}<span>.</span>`;
});
document.title = `${CONFIG.nome} | Desenvolvimento Web & Marketing Digital`;

const whatsappLink = document.getElementById("whatsapp-link");
if (CONFIG.whatsapp) {
  const message = encodeURIComponent("Olá! Conheci seu portfólio e gostaria de conversar sobre um projeto.");
  whatsappLink.href = `https://wa.me/${CONFIG.whatsapp}?text=${message}`;
} else {
  whatsappLink.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Contato sobre um projeto")}`;
  whatsappLink.target = "_self";
  whatsappLink.innerHTML = 'Configurar WhatsApp <span>↗</span>';
}

const emailLink = document.getElementById("email-link");
emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.email)}`;
emailLink.target = "_blank";
emailLink.rel = "noopener";
emailLink.textContent = "E-mail ↗";

const auraLink = document.getElementById("aura-link");
if (CONFIG.auraUrl) {
  auraLink.href = CONFIG.auraUrl;
  auraLink.target = "_blank";
  auraLink.rel = "noopener";
  auraLink.innerHTML = 'Ver projeto <span>↗</span>';
} else {
  auraLink.href = "#contato";
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
