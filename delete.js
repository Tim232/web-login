function delete_account() {
  var id = document.getElementById("id").value;
  var password = document.getElementById("password").value;

  var information = localStorage.getItem(id);

  if (information == null) {
    alert("존재하지 않는 계정입니다.\n아이디를 다시 입력해주세요.")
  } else if (information == password) {
    if (confirm("계정을 삭제합니다.\n삭제된 계정은 영구적으로 삭제되며 복구가 불가능합니다.\n\n정말로 계정을 삭제하시겠습니까?")) {
      localStorage.removeItem(id);
      alert("계정을 삭제하였습니다.\n메인화면으로 돌아갑니다.");

      location.href = "index.html"
    }
  } else {
    alert("비밀번호가 알맞지 않습니다.\n알맞은 비밀번호를 다시 입력해주세요.");
  }
}
