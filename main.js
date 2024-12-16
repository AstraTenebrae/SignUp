let id = (id) => document.getElementById(id);

let classes = (classes) =>
document.getElementsByClassName(classes);

let username = id("username"),
	email = id("email"),
	password = id("password"),
	form = id("form"),
	passwordError = id("passwordError"),
    confirmPasswordError = id("confirmPasswordError"),
	
	
	errorMsg = classes("error"),
	successIcon = classes("success-icon"),
	failureIcon = classes("failure-icon");
	
	username.value = localStorage.getItem(0);
    email.value = localStorage.getItem(1);
	password.value = localStorage.getItem(2);

 
form.addEventListener("submit", (e) => {
	e.preventDefault();
 
	engine(username, 0, "Username cannot be blank");
	engine(email, 1, "Email cannot be blank");
	engine(password, 2, "Password cannot be blank");
	checkPassword(password, 2);
    confirmPassword(confirmPasswordError, 3);
});

let engine = (id, serial, message) => {
	if (id.value.trim() === "") {
		errorMsg[serial].innerHTML = message;
		id.style.border = "2px solid red";
		
		// icons
		failureIcon[serial].style.opacity = "1";
		successIcon[serial].style.opacity = "0";
	} else {
		errorMsg[serial].innerHTML = "";
		id.style.border = "2px solid green";
		
		// icons
		failureIcon[serial].style.opacity = "0";
		successIcon[serial].style.opacity = "1";
		
		localStorage.setItem(serial, id.value);
	}
};

let checkPassword = (id, serial) => {
    const num = /\d/;
    const uc = /[A-Z]/;
    const ;c = /[a-z]/;
    let meessages = [];

    if (password.value.trim() == "") {
        errorMsg[serial].innerHTML = "Password cannot be blank";
        passwordError.style.display = "none";
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
        return;
    }

    if (password.value.length < 8) {
        messages.push("Minimum 8 characters");
    }

    if (!num.test(password.value)) {
        messages.push("A number");
    }    
    
    if (!uc.test(password.value)) {
        messages.push("An uppercase letter");
    }

    if (!lc.test(password.value)) {
        messages.push("A lowercase letter");
    }

    if (messages.length > 0) {
        passwordError.style.display = "block";
        errorMsg[serial].innerHTML = messages.join("<br>");
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        passwordError.style.display = "none";
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

let confirmPassword = (id, serial) => {
    if (confirmPasswordError.value.trim() == "") {
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else if (confirmPasswordError.value.trim() != password.value.trim()) {
        errorMsg[serial].innerHTML = "Passwords doesn't match";
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

function sendMail()
{
    var body = document.getElementById("username").value;
    window.location.href = "mailto:rfunn2021@gmail.com?subject=Happy NewYear&body="+body;
}