function changeMainFrameCal() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "table.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe 로드 완료");
  };
}

function changeMainFrameMain(){
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe 로드 완료");
  };
}
