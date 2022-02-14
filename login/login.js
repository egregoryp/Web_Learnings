if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

function createEventListeners() {
    var loginB = document.getElementById("login");

    if (loginB.addEventListener) {
        loginB.addEventListener("click", login, false);
    } else if (loginB.attachEvent) {
        loginB.attachEvent("onclick", login);
    }
}

function login() {
    var propertyWidth = 960;
    var propertyHeight = 600;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=960,height=600";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    var loginWindow = window.open("login/login.html", "login", winOptions);
    loginWindow.focus();
}