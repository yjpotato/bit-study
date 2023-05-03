const myFrame = document.getElementById("myFrame");
const calMenuBtn = document.getElementById("calMenuBtn");

calMenuBtn.addEventListener("click", () => {
  myFrame.src = "/table.html"; // 로드할 웹 페이지 URL을 입력합니다.
});
