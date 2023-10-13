//////////// Toggle side menu ////////////
try {
  const toggleContainer = document.getElementById("toggle_icon");
  const contentDiv = document.getElementById("toggle_content");

  toggleContainer.addEventListener("click", function () {
    contentDiv.classList.toggle("active"); // Toggle the "active" class on the contentDiv
  });
} catch (error) {}

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
} catch (error) {}

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

///////////// User Status ////////////

try {
  function toggleUserStatus() {
    var notificationDiv = document.getElementById("nav_user_status");
    notificationDiv.classList.toggle("active");
  }

  document.addEventListener("click", function (event) {
    var notificationDiv = document.getElementById("nav_user_status");
    var userAreaLink = document.querySelector(".user_area");

    // Check if the clicked element is not the user_area link or a child of the notificationDiv
    if (
      event.target !== userAreaLink &&
      !userAreaLink.contains(event.target) &&
      event.target !== notificationDiv &&
      !notificationDiv.contains(event.target)
    ) {
      notificationDiv.classList.remove("active");
    }
  });
} catch (error) {}

///////////// User Status Flag ////////////

try {
  // JavaScript logic to show/hide options and select an option
  const optionsDiv = document.getElementById("options");
  const optionText = document.querySelector(".option-text");

  function toggleOptions() {
    if (optionsDiv.style.display === "block") {
      optionsDiv.style.display = "none";
    } else {
      optionsDiv.style.display = "block";
    }
  }

  function selectOption(option) {
    optionText.innerHTML = `<iconify-icon icon="twemoji:flag-liberia"></iconify-icon> ${option}`;
    optionsDiv.style.display = "none";
  }
} catch (error) {}

//////////// /Notification Toggle Btn ////////////

try {
  document.addEventListener("click", function (event) {
    var notificationDiv = document.getElementById("notificationDiv");
    var userAreaLink = document.querySelector(".user_area");

    if (
      event.target !== notificationDiv &&
      !notificationDiv.contains(event.target) &&
      event.target !== userAreaLink
    ) {
      notificationDiv.classList.remove("active");
    }
  });

  function toggleNotification() {
    var notificationDiv = document.getElementById("notificationDiv");
    notificationDiv.classList.toggle("active");
    event.stopPropagation();
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
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const fileImage = document.getElementById("fileImage");
    const textContent = document.getElementById("textContent");

    if (fileInput.files.length > 0) {
      // A file has been selected, change button text and type
      uploadButton.textContent = "Start";
      uploadButton.type = "submit";

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
    document.getElementById("fileInput").click();
  }
} catch (error) {}

///////////// Input Tag Add ////////////

try {
  document.addEventListener('DOMContentLoaded', function () {
    var tags = [];
    var input = document.querySelector('.js-tag-input');
    var tagsContainer = document.querySelector('.js-tags');

    input.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) { // Enter key pressed
        var value = String(evt.target.value);

        if (value.trim() === '') {
          return;
        }

        tags.push(value);
        evt.target.value = '';
        render(tags, tagsContainer);
      }
    });

    function render(tags, el) {
      el.innerHTML = tags.map(function (tag, i) {
        return (
          '<div class="tag js-tag" data-index="' + i + '">' +
          tag +
          '<span class="tag-close js-tag-close" data-index="' + i + '">×</span>' +
          '</div>'
        );
      }).join('');
    }

    // Event delegation to handle tag close button clicks
    tagsContainer.addEventListener('click', function (evt) {
      if (evt.target.matches('.js-tag-close')) {
        var tagIndex = evt.target.getAttribute('data-index');
        tags.splice(tagIndex, 1);
        render(tags, tagsContainer);
      }
    });
  });
} catch (error) {}


try {
  const tags = document.querySelectorAll('.js-tag');

  // Add a click event listener to each tag
  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      // Toggle the 'active' class on the clicked tag
      tag.classList.toggle('active');
    });

    // Add a click event listener to the close button inside each tag
    const closeButton = tag.querySelector('.js-tag-close');
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the click event from propagating to the parent tag
      // Find the parent tag and remove it
      tag.remove();
    });
  });
} catch (error) {
  console.error(error);
}


try {
  // Get all elements with the class "p_tag"
  var pTags = document.querySelectorAll(".p_tag");

  // Add click event listeners to each "p_tag" element
  pTags.forEach(function (element) {
    element.addEventListener("click", function () {
      // Remove "active" class from all "p_tag" elements
      pTags.forEach(function (tag) {
        tag.classList.remove("active");
      });

      // Add "active" class to the clicked element
      this.classList.add("active");
    });
  });


} catch (error) {

}


try {
  // Get references to all toggle buttons and dropdown menus
  const toggleButtons = document.querySelectorAll(".supp_toggleButton");
  const dropdowns = document.querySelectorAll(".bayer_dropdown");

  // Function to toggle a specific dropdown menu
  function toggleDropdown(event) {
    const button = event.target;
    const dropdown = button.closest(".s_list").querySelector(".bayer_dropdown");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  // Add a click event listener to each toggle button
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleDropdown);
  });
} catch (error) {
  // Handle any errors that may occur
  console.error(error);
}



try {
  const tags = document.querySelectorAll('.tag');
  const buttonContainer = document.getElementById('button-container');

  // Calculate the number of hidden tags
  function calculateHiddenCount() {
    const totalTags = tags.length;
    const hiddenTags = document.querySelectorAll('.hidden').length;
    return hiddenTags;
  }

  // Update the "+X more" tag
  function updateShowMoreTag() {
    const hiddenCount = calculateHiddenCount();
    if (hiddenCount > 0) {
      const showMoreTag = document.createElement('a');
      showMoreTag.href = '#'; // Add a link destination if needed
      showMoreTag.textContent = `+${hiddenCount} more`;
      showMoreTag.classList.add('tag', 'show-more-tag');

      // Remove any existing "+X more" tag
      const existingShowMoreTag = document.querySelector('.show-more-tag');
      if (existingShowMoreTag) {
        existingShowMoreTag.remove();
      }

      // Add the new "+X more" tag to the container
      buttonContainer.appendChild(showMoreTag);
    } else {
      // Remove the "+X more" tag if no tags are hidden
      const existingShowMoreTag = document.querySelector('.show-more-tag');
      if (existingShowMoreTag) {
        existingShowMoreTag.remove();
      }
    }
  }

  // Initially show the first 4 tags
  tags.forEach((tag, index) => {
    if (index < 5) {
      tag.classList.remove('hidden');
    } else {
      tag.classList.add('hidden');
    }
  });

  // Update the "+X more" tag
  updateShowMoreTag();


} catch (error) {

}

try {


  const fileInput = document.getElementById("fileInput");
        const uploadButton = document.getElementById("uploadButton");
        const fileList = document.getElementById("fileList");
        let starCounter = 0; // Unique counter for star checkboxes

        uploadButton.addEventListener("click", function () {
            fileInput.click(); // Trigger a click event on the hidden file input
        });

        fileInput.addEventListener("change", function () {
            const files = fileInput.files;
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileItem = document.createElement("div");
                    fileItem.classList.add("file-item");

                    const starCheckboxContainer = document.createElement("div");
                    starCheckboxContainer.classList.add("star-checkbox-container");

                    // Generate unique IDs and labels for star rating
                    starCounter++; // Increment the counter
                    const starId = `star${starCounter}`;

                    // Add the star rating component
                    starCheckboxContainer.innerHTML = `
                        <div class="star-wrapper">
                            <input type="checkbox" id="${starId}" value="1" />
                            <label for="${starId}"></label>
                        </div>`;

                    fileItem.appendChild(starCheckboxContainer);

                    const fileInfoActions = document.createElement("div");
                    fileInfoActions.classList.add("file-info-actions");

                    const fileInfo = document.createElement("div");
                    fileInfo.classList.add("file-info");

                    const icon = document.createElement("img");
                    icon.src = "assets/img/icons/Attachment.svg";
                    icon.alt = "Attachment Icon";
                    fileInfo.appendChild(icon);

                    const fileName = document.createElement("div");
                    fileName.textContent = file.name;
                    fileInfo.appendChild(fileName);

                    fileInfoActions.appendChild(fileInfo);

                    const fileActions = document.createElement("div");
                    fileActions.classList.add("file-actions");

                    const fileSize = document.createElement("div");
                    fileSize.textContent = formatFileSize(file.size);
                    fileActions.appendChild(fileSize);

                    const closeIcon = document.createElement("span");
                    closeIcon.classList.add("close-icon");
                    closeIcon.innerHTML = "&#x2716;";
                    closeIcon.addEventListener("click", function () {
                        fileItem.remove();
                    });
                    fileActions.appendChild(closeIcon);

                    fileInfoActions.appendChild(fileActions);

                    fileItem.appendChild(fileInfoActions);

                    fileList.appendChild(fileItem);
                }
            }
        });

        function formatFileSize(bytes) {
            if (bytes === 0) return "0 Bytes";

            const k = 1024;
            const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            const i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
        }






} catch (error) {

}