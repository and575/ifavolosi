const form = document.querySelector("#rsvp-form");
const message = document.querySelector("#form-message");
if (form) {
  form.addEventListener("submit", () => {
    const action = form.getAttribute("action") || "";
    if (action.includes("YOUR_FORM_ID")) {
      message.textContent = "Il form non e ancora collegato: sostituisci YOUR_FORM_ID con il tuo endpoint Formspree.";
    } else {
      message.textContent = "Invio in corso...";
    }
  });
}

