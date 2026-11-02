document.addEventListener("DOMContentLoaded", function() {

    const menuButton = document.getElementById("menubutton");
    const closeButton = document.getElementById("closebutton");
    const sideMenu = document.getElementById("sidemenu");

    menuButton.onclick = function() {
        sideMenu.style.width = "350px";
    };

    closeButton.onclick = function() {
        sideMenu.style.width = "0";
    };

});