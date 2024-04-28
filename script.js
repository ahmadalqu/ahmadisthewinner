
function makeSmaller(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.fontSize = (parseInt(window.getComputedStyle(button).fontSize) - 2) + "px";
}

function goToYouTube() {
    window.location.href = "https://www.youtube.com/watch?v=S9RVS8cjNN0";
}

function submitName() {
    var name = document.getElementById("nameInput").value;
    localStorage.setItem("userName", name);
    window.location.href = "secondPage.html";
}

document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("userName").textContent = userName;
        document.getElementById("userButton").textContent = userName; // Set button text to the entered name
    }
});
