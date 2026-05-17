document.addEventListener("DOMContentLoaded", () => {

    /* DARK MODE */

    const toggleBtn = document.getElementById("themeToggle");

    if(toggleBtn){

        toggleBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

        });

    }

    /* SIDEBAR */

    const menuBtn = document.getElementById("menuBtn");

    const sidebar = document.getElementById("sidebar");

    if(menuBtn && sidebar){

        menuBtn.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

        });

    }

    /* CARD CLICK EFFECT */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(0.98)";

            setTimeout(() => {

                card.style.transform = "";

            }, 150);

        });

    });

    /* LOGIN FUNCTIONALITY */

    const loginForm = document.getElementById("loginForm");

    if(loginForm){

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const email = document.getElementById("email").value;

            const password = document.getElementById("password").value;

            if(email === "admin@gmail.com" && password === "1234"){

                window.location.href = "dashboard.html";

            } 
            
            else {

                alert("Invalid Email or Password");

            }

        });

    }

    console.log("CommitteeFlow Loaded Successfully");

});