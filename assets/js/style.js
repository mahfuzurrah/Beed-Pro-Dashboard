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