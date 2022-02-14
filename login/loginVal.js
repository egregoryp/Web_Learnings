if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}

function createEventListener() {
    var buttonLogin = document.getElementsByName("submitB")[0];
    if (buttonLogin.addEventListener) {
        buttonLogin.addEventListener("click", login, false);
    } else if (buttonLogin.attachEvent) {
        buttonLogin.attachEvent("onclick", login);
    }
}

function login() {
    if (validateCredentials()) {
        var assignments = window.opener.document.getElementsByClassName("dropdown");
        var loginMenu = window.opener.document.getElementById("login");
        for (var i = 0; i < assignments.length; i++) {
            assignments[i].style.display = 'inline-block';
        }
        loginMenu.style.display = 'none';
        window.close();
    } else {
        alert("Please enter a Valid Username and Password!");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

}

function validateCredentials() {
    var objUsers = [
        {
            username: "epena",
            password: "access001"
        },
        {
            username: "esantana",
            password: "professor007js"
        }
    ];    

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < objUsers.length; i++) {
        if (username == objUsers[i].username && password == objUsers[i].password) {
            return true;
        } else {
            return false
        }
    }

}