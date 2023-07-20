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


// Enter Verification Code

function handleInput(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    nextInput.focus();
  }
}

function handleInputTwo(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    nextInput.focus();
  }
}

function handleInputThree(currentInput, nextInput) {
  if (currentInput.value.length === currentInput.maxLength) {
    if (nextInput) {
      nextInput.focus();
    }
  }
}

function handleBackspace(currentInput, previousInput) {
  if (currentInput.value.length === 0 && event.keyCode === 8) {
    previousInput.focus();
  }
}


// input_error

function removeInputError() {
  const errorDiv = document.querySelector('.input_error');
  errorDiv.classList.remove('input_error');
}