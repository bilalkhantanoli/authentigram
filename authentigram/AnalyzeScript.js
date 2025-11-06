document.addEventListener("DOMContentLoaded", function () {
    const analyzeBtn = document.getElementById("analyzeBtn");
    const dialog = document.getElementById("loginDialog");
    const closeDialog = document.getElementById("closeDialog");

    analyzeBtn.addEventListener("click", function () {
        const user = localStorage.getItem("loggedInUser");
        if (user) {
            window.location.href = "OptionPage.html";
        } else {
            dialog.classList.remove("hidden");
        }
    });

    closeDialog.addEventListener("click", function () {
        dialog.classList.add("hidden");
    });
});
