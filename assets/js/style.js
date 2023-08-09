// Toggle side menu
const toggleContainer = document.getElementById("toggle_icon");
const contentDiv = document.getElementById("toggle_content");

toggleContainer.addEventListener("click", function () {
  contentDiv.classList.toggle("active");
});

// Dropdown Menu
function toggleNavDropdown(dropdownId) {
  const dropdownOptions = document.getElementById(dropdownId);
  const allDropdowns = document.getElementsByClassName("sub_menu");

  for (let i = 0; i < allDropdowns.length; i++) {
    const dropdown = allDropdowns[i];
    if (dropdown.id !== dropdownId) {
      dropdown.style.display = "none";
    }
  }

  dropdownOptions.style.display =
    dropdownOptions.style.display === "block" ? "none" : "block";
}

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
  const errorDiv = document.querySelector(".input_error");
  errorDiv.classList.remove("input_error");
}

// input Tag

const tagInput = document.getElementById("tag-input");
const selectedTagsContainer = document.getElementById("selected-tags");
const dropdown = document.getElementById("dropdown");
const dropdownOptions = document.querySelectorAll(".dropdown li");

let isDropdownVisible = false;

tagInput.addEventListener("click", () => {
  toggleDropdown();
});

dropdownOptions.forEach((option) => {
  option.addEventListener("click", () => {
    addTag(option.textContent);
    tagInput.value = "";
    toggleDropdown();
  });
});

tagInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTag(tagInput.value);
    tagInput.value = "";
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.matches("#tag-input") && isDropdownVisible) {
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
  dropdown.style.display = "block";
  isDropdownVisible = true;
}

function hideDropdown() {
  dropdown.style.display = "none";
  isDropdownVisible = false;
}

function addTag(tag) {
  if (tag.trim() === "") return;

  const tagElement = document.createElement("div");
  tagElement.classList.add("selected-tag");
  tagElement.textContent = tag;
  tagElement.addEventListener("click", () => {
    tagElement.remove();
  });

  selectedTagsContainer.appendChild(tagElement);
}

// Supplier Name Hide

const hideButtons = document.querySelectorAll(".hide_p");

hideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const personNameSpan = button.parentElement;

    personNameSpan.style.display = "none";
  });
});

const pItems = document.querySelectorAll(".c_person_name");

pItems.forEach((item) => {
  item.addEventListener("click", () => {
    pItems.forEach((pItem) => {
      pItem.classList.remove("active");
    });

    item.classList.add("active");
  });
});

//Pricing Table Btn

function setActiveButton(buttonClass) {
  const buttons = document.getElementsByClassName(buttonClass);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  event.currentTarget.classList.add("active");
}

//Notification Toggle Btn

function toggleNotification() {
  var notificationDiv = document.getElementById("notificationDiv");
  notificationDiv.classList.toggle("active");
}

function openNotification() {
  var notificationList = document.getElementById("notificationList");
  var singleNotification = document.getElementById("single_notification");

  notificationList.style.display = "none";
  singleNotification.style.display = "block";
}

function backNotification() {
  var notificationList = document.getElementById("notificationList");
  var singleNotification = document.getElementById("single_notification");

  notificationList.style.display = "block";
  singleNotification.style.display = "none";
}
