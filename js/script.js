window.addEventListener("DOMContentLoaded", () => {
  let feedbackLink = document.querySelector(".feedback-link");
  let feedbackModal = document.querySelector(".modal-feedback");
  let closeButton = document.querySelector(".button-close");

  let feedbackForm = feedbackModal.querySelector(".feedback-form");
  let fullnameInput = feedbackModal.querySelector("[name=fullname]");
  let emailInput = feedbackModal.querySelector("[name=email]");
  let messageInput = feedbackModal.querySelector("[name=message]");

  let isStorageSupport = true;
  let storage = "";

  let tabs = document.querySelectorAll(".services-button");
  let tabsContent = document.querySelectorAll(".services-item");
  let tabsParent = document.querySelector(".services-controls");

  try {
    storage = localStorage.getItem("fullname");
  } catch (err) {
    isStorageSupport = false;
  }

  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");

    if (storage) {
      fullnameInput.value = storage;
      emailInput.focus();
    } else {
      fullnameInput.focus();
    }
  });

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!fullnameInput.value || !emailInput.value || !messageInput.value) {
      evt.preventDefault();
      feedbackModal.classList.add("modal-error");
      if (!fullnameInput.value) {
        fullnameInput.setAttribute("required", "");
      }
      if (!emailInput.value) {
        emailInput.setAttribute("required", "");
      }
      if (!messageInput.value) {
        messageInput.setAttribute("required", "");
      }
    } else {
      localStorage.setItem("fullname", fullnameInput.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
      evt.preventDefault();
      if (feedbackModal.classList.contains("modal-show")) {
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.remove("modal-error");
      }
    }
  });

  let mapLink = document.querySelector(".map-link");

  let mapModal = document.querySelector(".modal-map");
  let mapClose = mapModal.querySelector(".button-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
      evt.preventDefault();
      if (mapModal.classList.contains("modal-show")) {
        mapModal.classList.remove("modal-show");
      }
    }
  });

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove("services-item--current");
    });

    tabs.forEach((item) => {
      item.classList.remove("services-button--current");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("services-item--current");
    tabs[i].classList.add("services-button--current");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    let target = event.target;

    if (target && target.classList.contains("services-button")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

});
