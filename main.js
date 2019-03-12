// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email

//let fm = document.querySelector

let fname = document.getElementById("fullname");
let email = document.getElementById("email");;
let message = document.getElementById("message");;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

document.getElementById("submit-button").onclick = function storeV() {

    let data = [];
    let errors = [];


    if (fname.value) {
        data.push(fname.value);
    } else {
        errors.push("name did not get stored");
    }

    if (email.value) {
        data.push(email.value);
    } else {
        errors.push("email did not get stored");
    }

    if (message.value) {
        data.push(message.value);
    } else {
        errors.push("message did not get stored");
    }



    if (errors.length === 0) {

        console.log(data);

        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    //fm.reset();    


    } else {

        console.log(errors);
    }


}