// Hlavní skript webu
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm') || document.querySelector('.contact-section form');
  const formMessage = document.getElementById('formMessage');

  if (contactForm && formMessage) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errorMessage = '';

      [nameInput, emailInput, messageInput].forEach(input => {
        if (input) {
          input.classList.remove('is-invalid');
          input.removeAttribute('aria-invalid');
        }
      });
      formMessage.classList.remove('is-visible', 'is-error');

      // Validace polí
      if (!nameVal || nameVal.length < 2) {
        errorMessage = 'Prosím, zadejte platné jméno (alespoň 2 znaky).';
        if (nameInput) {
          nameInput.classList.add('is-invalid');
          nameInput.setAttribute('aria-invalid', 'true');
          nameInput.focus();
        }
      } else if (!emailVal || !emailRegex.test(emailVal)) {
        errorMessage = 'Prosím, zadejte platnou e-mailovou adresu.';
        if (emailInput) {
          emailInput.classList.add('is-invalid');
          emailInput.setAttribute('aria-invalid', 'true');
          emailInput.focus();
        }
      } else if (!messageVal || messageVal.length < 5) {
        errorMessage = 'Prosím, zadejte zprávu (alespoň 5 znaků).';
        if (messageInput) {
          messageInput.classList.add('is-invalid');
          messageInput.setAttribute('aria-invalid', 'true');
          messageInput.focus();
        }
      }

      if (errorMessage) {
        formMessage.textContent = errorMessage;
        formMessage.classList.add('is-visible', 'is-error');
        formMessage.style.display = 'block';
        return;
      }

      // Vše v pořádku – odeslání
      contactForm.reset();
      formMessage.textContent = 'Děkuji za vaši zprávu. Zprávu jsem v pořádku přijal a ozvu se vám co nejdříve.';
      formMessage.classList.remove('is-error');
      formMessage.classList.add('is-visible');
      formMessage.style.display = 'block';
    });
  }
});
