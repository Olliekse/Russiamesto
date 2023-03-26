let formElement = document.querySelector(".popup");
let nameInput = document.getElementById("name");
let jobInput = document.getElementById("job");
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__job');


document.querySelector(".profile__edit-btn-box").addEventListener("click", openPopup);
document.querySelector(".popup__close").addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit);


function openPopup() {

	document.querySelector(".popup").classList.toggle("popup_show"); 
	let name = newName.textContent;
	let job = newJob.textContent;
	nameInput.value = name;
	jobInput.value = job;
}

function closePopup() {
	document.querySelector(".popup").classList.toggle("popup_show");
}


function handleFormSubmit (evt) {

    evt.preventDefault();

    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup(); 
}


 