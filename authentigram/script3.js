document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const authButtons = document.getElementById("auth-buttons");
    const userInfo = document.getElementById("user-info");
    const userEmailSpan = document.getElementById("user-email");
    const profileBtn = document.getElementById("profile-btn");
    const profileDropdown = document.getElementById("profile-dropdown");

    if (loggedInUser) {
        userEmailSpan.textContent = `Logged in as: ${loggedInUser}`;
        userInfo.style.display = "block";
        authButtons.style.display = "none";
    } else {
        userInfo.style.display = "none";
        authButtons.style.display = "block";
    }

   
    profileBtn.addEventListener("click", function () {
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    });

    
    document.addEventListener("click", function (e) {
        if (!userInfo.contains(e.target)) {
            profileDropdown.style.display = "none";
        }
    });

});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "dashboard.html";
}

