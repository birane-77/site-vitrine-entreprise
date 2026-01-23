document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche le rechargement

  let nom = document.getElementById("nom").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let error = document.getElementById("error");
  let success = document.getElementById("success");

  error.textContent = "";
  success.textContent = "";

  if (nom === "" || email === "" || message === "") {
    error.textContent = "❌ Tous les champs sont obligatoires";
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.textContent = "❌ Email invalide";
    return;
  }

  success.textContent = "✅ Message validé (formulaire prêt)";
  document.getElementById("contactForm").reset();
});
