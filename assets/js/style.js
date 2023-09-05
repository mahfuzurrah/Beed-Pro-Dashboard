//////////// Toggle side menu ////////////
try {
  const toggleContainer = document.getElementById("toggle_icon");
  const contentDiv = document.getElementById("toggle_content");

  toggleContainer.addEventListener("click", function () {
    contentDiv.classList.toggle("active"); // Toggle the "active" class on the contentDiv
  });
} catch (error) { }


//////////// Toggle side menu ////////////

try {
  const toggleSidemenuButton = document.getElementById("toggle_side_menu");
  const sidemenuList = document.querySelectorAll(".toggle_body");
  const breakpoint = 991;
  let isMobile = window.innerWidth <= breakpoint;
  let isSidebarActive = false;

  function toggleSmSidebarClass() {
    if (!isMobile) {
      sidemenuList.forEach((element) => {
        if (isSidebarActive) {
          element.classList.add("sm_sidebar");
        } else {
          element.classList.remove("sm_sidebar");
        }
      });
    }
  }

  // Call the function initially and on window resize
  toggleSmSidebarClass();

  window.addEventListener("resize", () => {
    isMobile = window.innerWidth <= breakpoint;
    toggleSmSidebarClass();
  });

  // Toggle sidebar class on button click
  toggleSidemenuButton.addEventListener("click", () => {
    isSidebarActive = !isSidebarActive;
    toggleSmSidebarClass();
  });
} catch (error) { }


//////////// Dropdown Menu ////////////
try {
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
} catch (error) {}

//////////// Enter Verification Code ////////////

try {
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
} catch (error) {}

//////////// input_error ////////////

try {
  function removeInputError() {
    const errorDiv = document.querySelector(".input_error");
    errorDiv.classList.remove("input_error");
  }
} catch (error) {}

//////////// input Tag ////////////

try {
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
} catch (error) {}

//////////// Supplier Name Hide ////////////

try {
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
} catch (error) {}

//////////// Pricing Table Btn ////////////

try {
  function setActiveButton(buttonClass) {
    const buttons = document.getElementsByClassName(buttonClass);

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }

    event.currentTarget.classList.add("active");
  }
} catch (error) {}

//////////// /Notification Toggle Btn ////////////

try {
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
} catch (error) {
  console.log("Notification");
}
///////////// File Upload ////////////

try {
  const fileInput = document.getElementById("fileInput");
  const fileInfo = document.getElementById("fileInfo");
  const fileSize = document.getElementById("fileSize");
  const deleteButton = document.getElementById("deleteFile");

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
      fileInfo.textContent = `${file.name}`;
      fileSize.textContent = ` ${formatFileSize(file.size)}`;
      fileInfo.style.display = "block";
      fileSize.style.display = "block";
      deleteButton.style.display = "block";
    } else {
      fileInfo.textContent = "";
      fileSize.textContent = "";
      fileInfo.style.display = "none";
      fileSize.style.display = "none";
      deleteButton.style.display = "none";
    }
  });

  deleteButton.addEventListener("click", function () {
    fileInput.value = "";
    fileInfo.textContent = "";
    fileSize.textContent = "";
    fileInfo.style.display = "none";
    fileSize.style.display = "none";
    deleteButton.style.display = "none";
  });

  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
} catch (error) {}



///////////// File Upload ////////////

try {
  function handleFileChange() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileImage = document.getElementById('fileImage');
    const textContent = document.getElementById('textContent');
  
    if (fileInput.files.length > 0) {
      // A file has been selected, change button text and type
      uploadButton.textContent = 'Start';
      uploadButton.type = 'submit';
  
      // Change the image source
      fileImage.innerHTML = '<img src="assets/img/icons/process.svg" alt="" />';
  
      // Change the text content
      textContent.innerHTML = `
        <p>
          Hello <br><b>Beed.bot AI Assistant</b> will now start to process your contracts.
          Please follow the status bar, once it turns green,
          you can review and validate your contracts.
        </p>
      `;
    }
  }
  
  function chooseFile() {
    document.getElementById('fileInput').click();
  }
} catch (error) {
  
}
