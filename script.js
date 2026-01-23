const form = document.getElementById("contactForm");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  error.textContent = "";
  success.textContent = "";

  if (!nom || !email || !message) {
    error.textContent = "❌ Veuillez remplir tous les champs";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.textContent = "❌ Adresse email invalide";
    return;
  }

  success.textContent = "✅ Message prêt à être envoyé";
  form.reset();
});
