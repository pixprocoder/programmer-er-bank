// From
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (email === "programmer@gmail.com" && password === "password") {
    window.location.href = "index.html";
  } else {
    alert("Provide valid password or email");
  }
});
