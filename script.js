function confirmEvent(event) {
    event.preventDefault();
    console.log("Button clicked!");
    var phone = document.getElementById("inputphone").value;
    var members = document.getElementById("inputmembers").value;
    console.log("Phone:", phone);
    console.log("Members:", members);

    if (!validatePhone(phone)) {
        alert("Invalid phone number");
    } else if (!validateMembers(members)) {
        alert("Invalid members count");
    } else {
        alert("Thanks for confirming !!!");
    }
}

function validatePhone(phone) {
    const numcheck = /^[0-9]+$/;
    return numcheck.test(phone);
}

function validateMembers(members) {
    const memcheck = /^[0-9]+$/;
    return memcheck.test(members);
}
