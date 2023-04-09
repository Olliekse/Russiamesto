const formElement = document.querySelector(".popup");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const newName = document.querySelector(".profile__name");
const newJob = document.querySelector(".profile__job");
const deleteButtons = document.getElementsByClassName("card__delete");
const cardsContainer = document.querySelector(".cards");
const likeButtons = document.getElementsByClassName("card__heart");
const inputUrl = document.getElementById("pic-link");
const inputName = document.getElementById("place-name");
const photoText = document.querySelector(".popup__photo-text");
const photo = document.querySelector("#photo");

// calls the function that renders the six initial cards

renderInitialCards();

// adds a listener to the 'edit profile' button and opens the corresponding popup

document
  .querySelector(".profile__edit-btn-box")
  .addEventListener("click", () => {
    const popupProfile = document.querySelector(".popup_type_profile");
    const name = newName.textContent;
    const job = newJob.textContent;
	
    nameInput.value = name;
    jobInput.value = job;

    openPopup(popupProfile);
  });

// closes the 'edit profile' popup upon clicking the 'X'

document.querySelector(".popup__close").addEventListener("click", () => {
  const popupProfile = document.querySelector(".popup_type_profile");

  closePopup(popupProfile);
});

// opens the 'add card' popup

document.querySelector(".profile__add-btn").addEventListener("click", () => {
  const popupAdd = document.querySelector(".popup_type_card");

  openPopup(popupAdd);
});

// closes the 'add card' popup upon clicking the 'X'

document.getElementById("popup-close").addEventListener("click", () => {
  const popupAdd = document.querySelector(".popup_type_card");

  closePopup(popupAdd);
});

// closes the zoomed photo popup upon clicking the 'X'

document.getElementById("popup-photo-close").addEventListener("click", () => {
  const popupPhoto = document.querySelector(".popup_type_photo");

  closePopup(popupPhoto);
});

// adds a listener to the 'edit profile' popup submit button

document
  .querySelector('[name="profile-form"]')
  .addEventListener("submit", handleProfileFormSubmit);

// adds a listener to the 'add card' popup submit button

document
  .querySelector('[name="add-form"]')
  .addEventListener("submit", handleAddCardFormSubmit);

// renders the six initial cards using a loop

function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = createCard(item);
    renderCard(card);
  });
}

// appends a newly created card to the parent container

function renderCard(elem) {
  cardsContainer.append(elem);
}

// creates a card with filled-in info, like and delete buttons and the corresponding listeners

function createCard(item) {
  const cardTemplate = document.getElementById("card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector("#delete-btn");
  const heartIcon = cardElement.querySelector("#heart-like");
  const cardPhoto = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__text");

  cardText.textContent = item.name;
  cardPhoto.alt = item.name;
  cardPhoto.src = item.link;

  deleteButton.addEventListener("click", (e) => {
    const cardToRemove = e.target.parentNode;

    cardToRemove.remove();
  });

  heartIcon.addEventListener("click", (e) => {
    const cardLiked = e.target;

    cardLiked.classList.toggle("card__heart_active");
  });

  cardPhoto.addEventListener("click", (e) => {
    const popupPhoto = document.querySelector(".popup_type_photo");
    const photoClicked = e.target;

    photo.src = photoClicked.src;
    photo.alt = photoClicked.alt;
    photoText.textContent = photoClicked.alt;

    openPopup(popupPhoto);
  });

  return cardElement;
}

// a single function that can open any of the three popups

function openPopup(element) {
  element.classList.toggle("popup_opened");
}

// a single function that can close any of the three popups

function closePopup(element) {
  element.classList.toggle("popup_opened");
}

// submits user-entered 'edit profile' popup info

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const popupProfile = document.querySelector(".popup_type_profile");

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup(popupProfile);
}

// submits user-entered 'new card' popup info, renders a new card then closes the popup

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const popupAdd = document.querySelector(".popup_type_card");
  const url = inputUrl.value;
  const name = inputName.value;

  const cardInfo = {
    name: name,
    link: url,
  };

  renderCard(createCard(cardInfo));

  inputUrl.value = "";
  inputName.value = "";

  closePopup(popupAdd);
}
