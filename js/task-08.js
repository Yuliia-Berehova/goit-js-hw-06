const formEL = document.querySelector(".login-form");

formEL.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (mail.value === '' || password.value === ''){
        alert("Bсі поля повинні бути заповнені.")
    } else {

        const formData = {
            mail: mail.value,
            password: password.value,
        };
        console.log(formData);

        formEL.reset();
    }
}