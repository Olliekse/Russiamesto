
const formElement = document.querySelector('.popup');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const newName = document.querySelector('.profile__name');
const newJob = document.querySelector('.profile__job');
const deleteButtons = document.getElementsByClassName('card__delete');
const cardsContainer = document.querySelector('.cards');
const likeButtons = document.getElementsByClassName('card__heart');

const initialCards = [
	{
	  name: 'Йорк',
	  link: './images/jeremy-stewardson-FcTv5d5kcPE-unsplash.jpg'
	},
	{
	  name: 'Лидс',
	  link: './images/al-elmes-yZAjIcXxpR0-unsplash.jpg'
	},
	{
	  name: 'Тур',
	  link: './images/jordi-vich-navarro-Ft_dAqZ6qq8-unsplash.jpg'
	},
	{
	  name: 'Экс-ан-Прованс',
	  link: './images/christian-mackie-PBvFpF3f624-unsplash.jpg'
	},
	{
	  name: 'Нижний Новгород',
	  link: './images/georgy-trofimov-8wsxtCoyIRs-unsplash.jpg'
	},
	{
	  name: 'Белград',
	  link: './images/dimitrije-milenkovic-Wa9gkmHOTf8-unsplash.jpg'
	}
  ];

loadInitialCards();

document.querySelector('.profile__edit-btn-box').addEventListener('click', openPopup);
document.querySelector('.popup__close').addEventListener('click', closePopup);
document.querySelector('[name="profile-form"]').addEventListener('submit', handleProfileFormSubmit);
document.querySelector('[name="add-form"]').addEventListener('submit', handleAddCardFormSubmit);
document.querySelector('.profile__add-btn').addEventListener('click', openAddPopup);
document.getElementById('popup-close').addEventListener('click', closeAddPopup);
document.getElementById('popup-photo-close').addEventListener('click', closePhotoPopup);

// opens enlarged photo popup

function openPhotoPopup () {
	const photoClicked = this;
	document.querySelector('#photo').src = photoClicked.src;
	document.querySelector('#photo').alt = photoClicked.alt;
	document.querySelector('.popup__photo-text').textContent = photoClicked.alt;
	document.getElementById('popup-photo').classList.toggle('popup_opened');
	document.getElementById('popup-photo').style.background = 'rgba(0, 0, 0, 0.9)';


}


// closes enlarged photo popup

function closePhotoPopup () {
	document.getElementById('popup-photo').classList.toggle('popup_opened');
}

// makes the hearts turn black when clicked

function likeCard() {
	const cardLiked = this;
	cardLiked.classList.toggle('card__heart_active'); 
}

// opens the profile edit popup

function openPopup() {

	document.getElementById('popup-profile').classList.toggle('popup_opened');
	const name = newName.textContent;
	const job = newJob.textContent;
	nameInput.value = name;
	jobInput.value = job;
}

// closes the profile edit popup

function closePopup() {
	document.getElementById('popup-profile').classList.toggle('popup_opened');
}

// submits user-entered profile popup info

function handleProfileFormSubmit (evt) {

    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup();
}

// deletes a card

  function deleteCard() {
	const cardToRemove = this.parentNode;
	cardToRemove.remove();
}

// creates the initial six cards upon page load

function createInitialCards() {

	for (i = 0; i < initialCards.length; i++) {

		createCard(initialCards[i].link, initialCards[i].name); 
	}
}

// loads the created initial cards

function loadInitialCards() {
	createInitialCards();
}

// opens the 'add card' popup

function openAddPopup() {
	document.getElementById('popup-add').classList.toggle('popup_opened');
}

// closes the 'add card' popup

function closeAddPopup() {
	document.getElementById('popup-add').classList.toggle('popup_opened');
}

// creates a new card using the template

function createCard(url, name) {

	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector('.card__text').textContent = name;
	cardElement.querySelector('.card__image').alt = name;
	cardElement.querySelector('.card__image').src = url;
	cardElement.querySelector('.card__image').addEventListener('click', openPhotoPopup);
	cardElement.querySelector('#delete-btn').addEventListener('click', deleteCard);
	cardElement.querySelector('#heart-like').addEventListener('click', likeCard);
	cardsContainer.append(cardElement);
}

// submits user-entered 'new card' info 

function handleAddCardFormSubmit (evt) {

    evt.preventDefault();
    const inputUrl = document.getElementById('pic-link');
	const inputName = document.getElementById('place-name');
	const url = inputUrl.value;
	const name = inputName.value;

	createCard(url, name);

	inputUrl.value = "";
	inputName.value = "";
  
    closeAddPopup();
}

