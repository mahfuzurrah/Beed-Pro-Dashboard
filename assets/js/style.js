const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#InputPassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.innerHTML = type === 'password' ? '<i class="fas fa-eye-slash icons"></i>' : '<i class="fas fa-eye icons"></i>';
});