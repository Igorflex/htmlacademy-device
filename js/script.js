var feedbackLink = document.querySelector(".feedback-link");
var feedbackModal = document.querySelector(".modal-feedback");
var closeButton = document.querySelector(".button-close");

var feedbackForm = feedbackModal.querySelector(".feedback-form");
var fullnameInput = feedbackModal.querySelector("[name=fullname]");
var emailInput = feedbackModal.querySelector("[name=email]");
var messageInput = feedbackModal.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

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

closeButton.addEventListener("click", function(evt) {
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
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains("modal-show")) {
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-link");

var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".button-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      mapModal.classList.remove("modal-show");
    }
  }
});
