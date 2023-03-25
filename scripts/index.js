document.querySelector(".profile__edit-btn-box").addEventListener("click", openPopup);
document.querySelector(".popup__close").addEventListener("click", closePopup);

function openPopup() {
	document.querySelector(".popup").style.display = "initial";
}

function closePopup() {
	document.querySelector(".popup").style.display = "none";
}

let formElement = document.querySelector(".popup");
let nameInput = document.getElementById("name");
let jobInput = document.getElementById("job");
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__job');

function handleFormSubmit (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup();
}


formElement.addEventListener('submit', handleFormSubmit); 