function login() {
  var id = document.getElementById("id").value;
  var password = document.getElementById("password").value;

  var information = localStorage.getItem(id);

  if (information != null && information == password) {
    location.href = ("success.html");
  } else {
    location.href = ("failed.html");
  }
}
