document.addEventListener("DOMContentLoaded", function () {
    const forgotButton = document.getElementById("forgot-btn");

    if (forgotButton) {
        forgotButton.addEventListener("click", function (event) {
            event.preventDefault(); 
            window.location.href = "Forgot.html"; 
        });
    }

    const resetButton = document.getElementById("reset-btn");
        
        
        if (resetButton) {
            resetButton.addEventListener("click", function (event) {
                event.preventDefault();
    
                const email = document.getElementById("reset-email").value.trim();
                const newPassword = document.getElementById("new-password").value.trim();
    
                
                if (!email || !newPassword) {
                    alert("Please fill in all fields!");
                    return;
                }
    
                
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }
    
                
                const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
                if (!passwordPattern.test(newPassword)) {
                    alert("Password must be at least 8 characters long and include a number and special character.");
                    return;
                }
    
                
                if (localStorage.getItem(email)) {
                    localStorage.setItem(email, newPassword);
                    alert("Password reset successful! Redirecting to login...");
                    setTimeout(() => {
                        window.location.href = "AuthentigramLogin.html";
                    }, 2000);
                } else {
                    alert("Email does not exist. Please sign up.");
                }
            });
        }
});
