import { db } from "../constants/firebase"
import { doc, setDoc } from "firebase/firestore";


const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const validatePhone = (number) => {
    const regex = /^[(]*[0-9]{3}[)]*[ ,-]*[0-9]{3}[ ,-]*[0-9]{4}[\n|\s]*$/;
    return regex.test(number);
}

const insertErrorText = (target, text) => {
    target.scrollIntoView();
    target.parentElement.insertAdjacentHTML(
        "afterend",
        `<span is-error-node style="color:red; display: block; font-family: sans-serif">${text}</span>`,
      );
}


export const handleRegistration = async (target, birthday, shirtSize, router) => {
    let nodesToDelete = document.querySelectorAll('[is-error-node]');
    let validForm = true;
    nodesToDelete.forEach((ele) => {
        ele.remove();
    })
    for (let i = 0; i < target.length; i++) {
        target[i].style.color = 'rgba(0, 0, 0, 0.87)';
    }
    if (!birthday) {
        validForm = false;
    }
    if(Number(birthday.$y) > 2006){
        const birthdayInput = target.querySelector("#birthdate");
        birthdayInput.style.color = 'red';
        birthdayInput.scrollIntoView();
        birthdayInput.parentElement.parentElement.insertAdjacentHTML(
            "afterend",
            `<span is-error-node style="color:red; display: block; font-family: sans-serif">Must be over 18, or turning 18 in 2024</span>`,
          );
          validForm = false;
    }
    let gender = 'm';
    if (target.querySelector("#male-select").checked) {
        gender = 'm';
    } else if (target.querySelector("#female-select").checked) {
        gender = 'f';
    } else if (target.querySelector("#nb-select").checked) {
        gender = 'o';
    }
    const email = target.querySelector("#email").value;
    if (!validateEmail(email)) {
        target.querySelector("#email").style.color = 'red';
        insertErrorText(target.querySelector("#email"), "invalid email");
        validForm = false;
    }
    if (email !== target.querySelector("#verifyEmail").value) {
        target.querySelector("#verifyEmail").style.color = 'red';
        insertErrorText(target.querySelector("#verifyEmail"), "emails must match");
        validForm = false;
    }
    const phone = target.querySelector("#phone").value;
    if(!validatePhone(phone)){
        target.querySelector("#phone").style.color = 'red';
        insertErrorText(target.querySelector("#phone"), "invalid phone number");
        validForm = false;
    }
    const emergencyPhoneValid = validatePhone(target.querySelector("#emergencyPhone").value);
    if(!emergencyPhoneValid){
        target.querySelector("#emergencyPhone").style.color = 'red';
        insertErrorText(target.querySelector("#emergencyPhone"), "invalid phone number");
        validForm = false;
    }

    if(!validForm){
        return;
    }

    const payload = {
        "address": target.querySelector("#address").value,
        "birthdate": `${birthday.$D}/${birthday.$M}/${birthday.$y}`,
        "shirtSize": shirtSize,
        "contactPhone": target.querySelector("#emergencyPhone").value,
        "country": target.querySelector("#country").value,
        "email": target.querySelector("#email").value,
        "emergencyContact": target.querySelector("#emergencyName").value,
        "firstName": target.querySelector("#firstName").value,
        "gender": gender,
        "lastName": target.querySelector("#lastName").value,
        "paid": false,
        "phone": target.querySelector("#phone").value,
        "province": target.querySelector("#province").value,
        "waiverSigned": target.querySelector("#initial").value !== null,
        "zip": target.querySelector("#postalCode").value
    }
    try {
        await setDoc(doc(db, "registration", email), payload);
        router.push('/checkout');
    } catch (e) {
        console.error("Error adding document: ", e);
        return;
    }
}

export const handleVolunteerRegistration = async (target, birthday, shirtSize, router) => {
    let nodesToDelete = document.querySelectorAll('[is-error-node]');
    let validForm = true;
    nodesToDelete.forEach((ele) => {
        ele.remove();
    })
    for (let i = 0; i < target.length; i++) {
        target[i].style.color = 'rgba(0, 0, 0, 0.87)';
    }
    if (!birthday) {
        validForm = false;
    }
    const email = target.querySelector("#email").value;
    if (!validateEmail(email)) {
        target.querySelector("#email").style.color = 'red';
        insertErrorText(target.querySelector("#email"), "invalid email");
        validForm = false;
    }
    if (email !== target.querySelector("#verifyEmail").value) {
        target.querySelector("#verifyEmail").style.color = 'red';
        insertErrorText(target.querySelector("#verifyEmail"), "emails must match");
        validForm = false;
    }
    const phone = target.querySelector("#phone").value;
    if(!validatePhone(phone)){
        target.querySelector("#phone").style.color = 'red';
        insertErrorText(target.querySelector("#phone"), "invalid phone number");
        validForm = false;
    }
    if(!validForm){
        return;
    }

    const payload = {
        "shirtSize": shirtSize,
        "email": target.querySelector("#email").value,
        "firstName": target.querySelector("#firstName").value,
        "lastName": target.querySelector("#lastName").value,
        "phone": target.querySelector("#phone").value,
    }
    try {
        await setDoc(doc(db, "volunteers", email), payload);
        router.push('/thank-you');
    } catch (e) {
        console.error("Error adding document: ", e);
        return;
    }
}