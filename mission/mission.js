const themeSelector = document.querySelector("#theme-select")
function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark-mode")
        document.getElementById('logo').src = 'mission/images/byui-logo_white.png';
    } else {
        document.body.classList.remove("dark-mode")
        document.getElementById('logo').src = 'images/byui-logo_blue.webp';
    }

}
themeSelector.addEventListener("change", changeTheme);