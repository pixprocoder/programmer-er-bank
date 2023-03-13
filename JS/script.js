// From
document.getElementById("signin-btn").addEventListener("click", function () {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (email === "programmer@gmail.com" && password === "password") {
    window.location.href = "bank.html";
  } else {
    alert("Provide valid password or email");
  }
});
