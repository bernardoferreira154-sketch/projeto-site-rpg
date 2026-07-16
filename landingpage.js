const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
})


document.querySelector(".logo").addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach(e => {
        e.classList.remove("hidden");
    });
    document.querySelectorAll(".login, .signup").forEach(e => {
        e.classList.add("hidden")
    })

});



document.querySelector(".sign_up").addEventListener("click", () => {
    document.querySelector(".landingpage")?.classList.add("hidden");
    document.querySelector(".login")?.classList.add("hidden");
    document.querySelector(".signup").classList.remove("hidden");
});

document.querySelector(".log_in").addEventListener("click", () => {
    document.querySelector(".landingpage")?.classList.add("hidden");
    document.querySelector(".signup")?.classList.add("hidden");
    document.querySelector(".login").classList.remove("hidden");
});

const inputEmail = document.querySelector(".e-mail");
const inputPassword = document.querySelector(".pswrd");
const btnGoogle = document.querySelector(".SignUpWGoogle");

const addClassBtnGoogle = () => { document.querySelector(".SignUpWGoogle").classList.add("sobreselecionado");}
const removeClassBtnGoogle = () => { document.querySelector(".SignUpWGoogle").classList.remove("sobreselecionado");}

inputEmail.addEventListener('focus', addClassBtnGoogle);
inputEmail.addEventListener('blur', removeClassBtnGoogle);

inputPassword.addEventListener('focus', addClassBtnGoogle);
inputPassword.addEventListener('blur', removeClassBtnGoogle);