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


// input Tag

const tagInput = document.getElementById('tag-input');
const selectedTagsContainer = document.getElementById('selected-tags');
const dropdown = document.getElementById('dropdown');
const dropdownOptions = document.querySelectorAll('.dropdown li');

let isDropdownVisible = false;

tagInput.addEventListener('click', () => {
  toggleDropdown();
});

dropdownOptions.forEach(option => {
  option.addEventListener('click', () => {
    addTag(option.textContent);
    tagInput.value = '';
    toggleDropdown();
  });
});

tagInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTag(tagInput.value);
    tagInput.value = '';
  }
});

document.addEventListener('click', event => {
  if (!event.target.matches('#tag-input') && isDropdownVisible) {
    hideDropdown();
  }
});

function toggleDropdown() {
  if (isDropdownVisible) {
    hideDropdown();
  } else {
    showDropdown();
  }
}

function showDropdown() {
  dropdown.style.display = 'block';
  isDropdownVisible = true;
}

function hideDropdown() {
  dropdown.style.display = 'none';
  isDropdownVisible = false;
}

function addTag(tag) {
  if (tag.trim() === '') return;

  const tagElement = document.createElement('div');
  tagElement.classList.add('selected-tag');
  tagElement.textContent = tag;
  tagElement.addEventListener('click', () => {
    tagElement.remove();
  });

  selectedTagsContainer.appendChild(tagElement);
}



// Supplier Name Hide
// const items = document.querySelectorAll('.hide_p');

// // Add click event listener to each item
// items.forEach(item => {
//   item.addEventListener('click', () => {
//     // Toggle the visibility of the clicked item
//     item.style.display = 'none';
//   });
// });

// Get all elements with class "hide_p"
const hideButtons = document.querySelectorAll('.hide_p');

// Add click event listener to each "hide_p" element
hideButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent element of the "hide_p" button, which is the "c_person_name" span
        const personNameSpan = button.parentElement;

        // Toggle the visibility of the parent element
        personNameSpan.style.display = 'none';
    });
});