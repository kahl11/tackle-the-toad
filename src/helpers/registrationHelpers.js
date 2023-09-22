import { db } from "../constants/firebase"
import { doc, setDoc } from "firebase/firestore"; 
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




export const handleRegistration = async (target, birthday, router) => {
    for (let i = 0; i < target.length; i++) {
        target[i].style.color = 'rgba(0, 0, 0, 0.87)';
    }
    if (!birthday) {
        return;
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
    }

    const payload = {
        "address": target.querySelector("#address").value,
        "birthdate": `${birthday.$D}/${birthday.$M}/${birthday.$y}`,
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