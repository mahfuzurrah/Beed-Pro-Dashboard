// Toggle side menu
const toggleContainer = document.getElementById('toggle_icon');
const contentDiv = document.getElementById('toggle_content');

toggleContainer.addEventListener('click', function () {
  contentDiv.classList.toggle('active');
});

// Dropdown Menu
const menuLists = document.querySelectorAll('.nav_list');

menuLists.forEach(menuList => {
  const subMenu = menuList.querySelector('.sub_menu');
  menuList.addEventListener('click', () => {
    subMenu.classList.toggle('open');
  });
});


// Toggle Password
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#InputPassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.innerHTML = type === 'password' ? '<i class="fas fa-eye-slash icons"></i>' : '<i class="fas fa-eye icons"></i>';
});