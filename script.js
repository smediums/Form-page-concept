const username = document.getElementById('username')
const email = document.getElementById('email')
const conEmail = document.getElementById('cemail')
const form = document.querySelector('form')


//validation
const validateInput = () => {

    //username
    if (username.value.length < 3 || username.value.length == "") {
        onNotValid(username);
    } else {
        onValid(username);
    }

    //Email
    if (email.value.length === "") {
        onNotValid(email);
    } else {
        if (!validEmail(email.value)) {
            onNotValid(email);
        } else {
            onValid(email);
        }
    }

    //Confirm Email
    if (cemail.value.length == "") {
        let parent = cemail.parentElement;
        parent.classList.add('error');
        parent.classList.remove('success');
    } else {
        if (email.value !== cemail.value) {
            onNotValid(cemail);
        } else {
            onValid(cemail);
        }
    }
}


// document.querySelector("button")
//     .addEventListener("click", (e) => {
//         e.preventDefault();
//         validateInput();

//     });


function onNotValid(input) {
    let parent = input.parentElement;
    let messageElm = parent.querySelector('small');
    messageElm.style.visibility = "visible";
    parent.classList.add('error');
    parent.classList.remove('success');
}
function onValid(input) {
    let parent = input.parentElement;
    let messageElm = parent.querySelector('small')
    messageElm.style.visibility = "hidden";
    parent.classList.remove('error');
    parent.classList.add('success');
}
function validEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}


//Toggle Menu
const toggler = document.querySelector('.toggler');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.nav li');

const toggleMenu = (trigger, event, item, classAdd) => {
    trigger.addEventListener(event, () => {
        item.classList.toggle(classAdd);
    });
};

toggleMenu(toggler, 'click', nav, 'active');

//Switch Form on Click
const signUp = document.querySelector('.form2');
const container2 = document.querySelector('.container2');
const createAcc = document.getElementById('signUpBtn');


const swicthForm = () => {
    createAcc.addEventListener('click', () => {
        container2.classList.add('active');
    });
};

swicthForm();