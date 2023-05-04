function changeMainFrameSrc() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "table.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe 로드 완료");
  };
}
