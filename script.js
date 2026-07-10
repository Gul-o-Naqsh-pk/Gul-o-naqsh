document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

console.log("Welcome to Gul-o-Nasque!");
function adminLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("message").innerText =
      "Wrong username or password.";
  }
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "admin-login.html";
}

if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
  }
}
