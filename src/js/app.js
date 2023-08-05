const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const inputs = document.querySelectorAll("input");
const personalNumber = document.querySelector("#personal_number"),
	mobileNumber = document.querySelector("#mobile_number"),
	jobDescription = document.querySelector("#job-description");
const personalNumberError = document.querySelector("#personal_number-error"),
	mobileNumberError = document.querySelector("#mobile_number-error"),
	jobDescriptionError = document.querySelector("#job_description-error");

function modalAction(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	modal.classList.add("open");
	closeBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}

function isUserNameValid() {
	if (/^\s*$/.test(username.value)) {
		userNameError.innerText = "username is required";
		username.classList.remove("correct");
		username.classList.add("error");
		return false;
	} else {
		userNameError.innerText = "";
		username.classList.remove("error");
		username.classList.add("correct");
		return true;
	}
}

function isEmailValid() {
	if (/^\s*$/.test(email.value)) {
		emailError.innerText = "email is required";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else if (!/@gmail.com$/.test(email.value)) {
		emailError.innerText = "email must be gmail";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else {
		emailError.innerText = "";
		email.classList.remove("error");
		email.classList.add("correct");
		return true;
	}
}

function isPasswordValid() {
	if (password.value.length < 8) {
		password.classList.remove("correct");
		password.classList.add("error");
		passError.innerText = "password must be at least 8 char";
		return false;
	} else {
		passError.innerText = "";
		password.classList.remove("error");
		password.classList.add("correct");
		return true;
	}
}

function isPersonalNumberValid() {
	if (personalNumber.value.trim() === "") {
		personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		personalNumberError.innerText = "personal number is required";
		return false;
	} else if (!/^\d+$/.test(personalNumber.value)) {
		personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		personalNumberError.innerText = "personal number must be only numbers";
		return false;
	} else if (personalNumber.value.length !== 11) {
		personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		personalNumberError.innerText = "personalNumber must be 11 charachter";
		return false;
	} else {
		personalNumber.classList.add("correct");
		personalNumber.classList.remove("error");
		personalNumberError.innerText = "";
		return true;
	}
}

function isMobileNumberValid() {
	if (mobileNumber.value.trim() === "") {
		mobileNumber.classList.remove("correct");
		mobileNumber.classList.add("error");
		mobileNumberError.innerText = "required";
		return false;
	} else if (!/^\d+$/.test(mobileNumber.value)) {
		mobileNumber.classList.remove("correct");
		mobileNumber.classList.add("error");
		mobileNumberError.innerText = "mobile number must be only numbers";
		return false;
	} else if (mobileNumber.value.length !== 9) {
		mobileNumber.classList.remove("correct");
		mobileNumber.classList.add("error");
		mobileNumberError.innerText = "must be 9 charachter";
		return false;
	} else {
		mobileNumber.classList.add("correct");
		mobileNumber.classList.remove("error");
		mobileNumberError.innerText = "";
		return true;
	}
}

function isJobValid() {
	if (jobDescription.value.length >= 50) {
		jobDescription.classList.remove("correct");
		jobDescription.classList.add("error");
		jobDescriptionError.innerText = "must not be more than 50 charachter";
		return false;
	} else {
		jobDescription.classList.add("correct");
		jobDescription.classList.remove("error");
		jobDescriptionError.innerText = "";
		return true;
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isUNValid = isUserNameValid();
	const isEValid = isEmailValid();
	const isPValid = isPasswordValid();
	const isIdValid = isPersonalNumberValid();
	const isPhoneValid = isMobileNumberValid();
	const isJObValid = isJobValid();

	if (
		isUNValid &&
		isEValid &&
		isPValid &&
		isIdValid &&
		isPhoneValid &&
		isJObValid
	) {
		// form.submit();
		form.reset();
		inputs.forEach((el) => el.classList.remove("correct"));
		modalAction("#sign-up-modal");
	}
});

try {
	username.addEventListener("input", isUserNameValid);
	email.addEventListener("input", isEmailValid);
	password.addEventListener("input", isPasswordValid);
	mobileNumber.addEventListener("input", isMobileNumberValid);
	personalNumber.addEventListener("input", isPersonalNumberValid);
	jobDescription.addEventListener("input", isJobValid);
} catch (error) {
	console.log(error);
} finally {
	console.log("finally");
}
