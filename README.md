#login page

#html

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
    <script src="validation.js"></script>
</head>
<body>
<div id="login-container">
    <div id="sq"></div>
    <h2>Login</h2>
    <form id="login-form">
        <div class="input-container">
            <label id="email">Email:</label>
            <input id="inputemail" type="text" placeholder="Enter your email id">
        </div>
        <div class="input-container">
            <label>Password:</label>
            <input id="inputpassword" type="text" placeholder="Enter your password">
        </div>
        <button type="button" onclick="validate(event)">Submit</button>
    </form>
</div>
</body>
</html>


#css



body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: blueviolet;
    
}

#login-container{
    background-color: aliceblue;
    padding: 30px 40px;
    display: flex;
    border: 2px solid burlywood;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;
}
#sq{
    height: 100px;
    width: 100px;
    background-color: #555;
    margin: 10px;
}

label#email{
    padding-right: 23px;
}

button{
    padding: 5px;
}

#javascript

function validate(event) {
    event.preventDefault(); 
    var email = document.getElementById("inputemail");
    var password = document.getElementById("inputpassword");

    if (!validateEmail(email.value)) {
        alert("Invalid email id");
    } else if (!validatePassword(password.value)) {
        alert("Invalid password");
    } else {
        window.location.href = "home.html";
    }
}

function validateEmail(email) {
    const mailcheck = /^[a-zA-z0-9]+@+gmail.com$/;
    return mailcheck.test(email);
}

function validatePassword(password) {
    const pswdcheck = /^[a-zA-z0-9]+$/;
    return pswdcheck.test(password);
}
