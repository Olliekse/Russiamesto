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
const popupProfile = document.querySelector(".popup_type_profile");
const popupAdd = document.querySelector(".popup_type_card");
const popupPhoto = document.querySelector(".popup_type_photo");


// calls the function that renders the six initial cards

renderInitialCards();

// adds a listener to the 'edit profile' button and opens the corresponding popup

document
  .querySelector(".profile__edit-btn-box")
  .addEventListener("click", () => {
    const name = newName.textContent;
    const job = newJob.textContent;

    nameInput.value = name;
    jobInput.value = job;

    openPopup(popupProfile);
  });

// closes the 'edit profile' popup upon clicking the 'X'

document.querySelector(".popup__close").addEventListener("click", () => {
  

  closePopup(popupProfile);
});

// opens the 'add card' popup

document.querySelector(".profile__add-btn").addEventListener("click", () => {
 

  openPopup(popupAdd);
});

// closes the 'add card' popup upon clicking the 'X'

document.getElementById("popup-close").addEventListener("click", () => {
  
  closePopup(popupAdd);
});

// closes the zoomed photo popup upon clicking the 'X'

document.getElementById("popup-photo-close").addEventListener("click", () => {
  

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
  cardsContainer.prepend(elem);
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

  deleteButton.addEventListener("click", () => {

    cardElement.remove();
  });

  heartIcon.addEventListener("click", () => {

    heartIcon.classList.toggle("card__heart_active");
  });

  cardPhoto.addEventListener("click", () => {

    photo.src = item.link;
    photo.alt = item.name;
    photoText.textContent = item.name;

    openPopup(popupPhoto);
  });

  return cardElement;
}

// a single function that can open any of the three popups

function openPopup(element) {
  element.classList.add("popup_opened");
}

// a single function that can close any of the three popups

function closePopup(element) {
  element.classList.remove("popup_opened");
}

// submits user-entered 'edit profile' popup info

function handleProfileFormSubmit(evt) {
  evt.preventDefault();


  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup(popupProfile);
}

// submits user-entered 'new card' popup info, renders a new card then closes the popup

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

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
