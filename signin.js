function signin() {
  var id = document.getElementById("id").value;
  var password = document.getElementById("password").value;

  if (localStorage.getItem(id) == null) {
    localStorage.setItem(id, password);
    alert("회원가입이 완료되었어요!\n이제 로그인 페이지에서 로그인해주세요!")
    window.open("login.html")
  } else {
    alert("이미 존재하는 아이디에요.\n당신만의 색다른 아이디로 다시 시도해보세요!")
  }
}
