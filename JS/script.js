// From
document.getElementById("signin-btn").addEventListener("click", function () {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (email === "programmer@gmail.com" && password === "password") {
    console.log("valid user");
  } else {
    console.log("invalid user");
  }
});
