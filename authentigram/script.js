document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("#signup-form");
    const loginForm = document.querySelector("#login-form");
    

    
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please fill in all fields!");
                return;
            }

            if (localStorage.getItem(email)) {
                alert("User already exists! Please log in.");
            } else {
                localStorage.setItem(email, password);
                alert("Sign Up Successful! Now log in.");
                window.location.href = "AuthentigramLogin.html"; 
            }
        });
    }

    
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please fill in all fields!");
                return;
            }

            const storedPassword = localStorage.getItem(email);
            if (!storedPassword) {
                alert("Password is incorrect!");
                
            } else if (storedPassword === password) {
                localStorage.setItem("loggedInUser", email);
                alert("Login Successful! Welcome.");
                window.location.href = "dashboard.html"; 
            } else {
                alert("Incorrect password or Email, try again!");
            }
        });
    }

    
    const signupLink = document.querySelector(".signup span");
    const loginLink = document.querySelector(".Login span");

    if (signupLink) {
        signupLink.addEventListener("click", function () {
            window.location.href = "AuthentigramSignUp.html";
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", function () {
            window.location.href = "AuthentigramLogin.html";
        });
    }

    
    if (forgotButton) {
        forgotButton.addEventListener("click", function () {
            window.location.href = "Forgot.html"; 
        });
    }

    

    function handleCredentialResponse(response) {
        const token = response.credential; // 
        console.log("Google Token:", token);
    
        
        const user = decodeJwt(token);
        console.log("User Info:", user);
    
      
        localStorage.setItem("user", JSON.stringify(user));
    
        
        window.location.href = "dashboard.html";
    }
    
   
    function decodeJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    
    
        

    
});


document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("togglePassword").addEventListener("click", function () {
            var passwordInput = document.getElementById("password");
            var icon = this.querySelector("i");
    
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passwordInput.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    });
    