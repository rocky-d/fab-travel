// CONTACT FORM VALIDATION AND SENDING
const form = document.forms.contactForm;

let inputs = document.querySelectorAll(".field");
let errors;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkAllInputs();
    sendForm();
});

function checkAllInputs() {
    errors = [];

    for (let input of inputs) {
        checkInputValidity(input);
    }
}

function checkInputValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors++;

        document.querySelector(`.${input.id}__Required`).textContent = "This field is required.";
    }

    if (validity.patternMismatch) {
        errors++;

        document.querySelector(`.${input.id}__Required`).textContent = `This must be a valid ${input.placeholder.slice(0, -2).toLowerCase()}.`;
    }
}

function sendForm() {
    const userContact = {
        name: form.elements.userName.value, email: form.elements.userEmail.value, phone: form.elements.userPhone.value,
    };

    const request = new Request("https://httpbin.org/post", {
        method: "POST", headers: {
            "Content-Type": "multipart/form-data",
        }, body: JSON.stringify(userContact),
    });

    if (errors == 0) {
        console.log("Contact information has been sent:", userContact);

        fetch(request)
            .then((response) => {
                if (response.status === 200) {
                    document.getElementById("successMessage").textContent = `Thank you! We will contact you as soon as possible.`;
                    clearForm();
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "";
                    }, "10000");
                }
            })
            .catch((error) => {
                console.log(error.message);
                document.getElementById("successMessage").textContent = "An error has occurred. Please try again later!";
            });
    }
}

function clearForm() {
    inputs.forEach((input) => (input.value = ""));

    document
        .querySelectorAll(".form__inputs_error")
        .forEach((element) => (element.textContent = ""));
}

// SINGLE-INPUT ERROR MESSAGES
let namesRegex = /^[-a-zA-Zа-яА-Я'\s]+$/;
let emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,14})$/;
let phoneRegex = /^[0-9+]{1,}[0-9\-.()\s]{3,29}$/;

for (const input of inputs) {
    input.addEventListener("input", function () {
        if (input.value != "") {
            document.querySelector(`.${input.id}__Required`).textContent = (input.id == "userName" && namesRegex.test(input.value)) || (input.type == "email" && emailRegex.test(input.value)) || (input.type == "tel" && phoneRegex.test(input.value)) ? (document.querySelector(`.${input.id}__Required`).textContent = ``) : (document.querySelector(`.${input.id}__Required`).textContent = `This must be a valid ${input.placeholder.slice(0, -2).toLowerCase()}.`);
        } else {
            document.querySelector(`.${input.id}__Required`).textContent = "This field is required.";
        }
    });
}

// EXCURSIONS AND REVIEWS SLIDERS
const sliderContainers = [...document.querySelectorAll(".slider-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

function setSlider() {
    sliderContainers.forEach((container, i) => {
        const containerWidth = container.getBoundingClientRect().width;
        const cardWidth = container.querySelector(".card").getBoundingClientRect().width + 24; //1 card + column gap
        const cardsQuantity = [...container.querySelectorAll(".card")].length;

        const visibleCards = Math.floor(containerWidth / cardWidth);
        const oneMove = visibleCards * cardWidth;

        const paddingRight = cardsQuantity % visibleCards == 0 ? containerWidth - cardWidth + 24 : containerWidth - (cardsQuantity % visibleCards) * cardWidth + 24;

        container.style["paddingRight"] = `${paddingRight}px`;

        nxtBtn[i].addEventListener("click", () => {
            container.scrollLeft += oneMove;
        });

        preBtn[i].addEventListener("click", () => {
            container.scrollLeft -= oneMove;
        });
    });
}

setSlider();

window.onresize = () => {
    sliderContainers.forEach((container) => container.scrollTo({
        left: 0, behavior: "smooth",
    }));
    setSlider();
};

//BURGER-MENU
const burgerMenu = document.querySelector(".menu__burger");
const bodyMenu = document.querySelector(".menu__body");
const menuLinks = document.querySelectorAll(".menu__link");

if (burgerMenu) {
    burgerMenu.addEventListener("click", function () {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        bodyMenu.classList.toggle("_active");
    });
}

if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

function onMenuLinkClick() {
    if (burgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenu.classList.remove("_active");
        bodyMenu.classList.remove("_active");
    }
}
