document.addEventListener('DOMContentLoaded', function () {
  // 브라우저 감지
  browserDetector();

  // 컴포넌트 로드
  loadComponent("#header-placeholder", "../components/header/header.html");
  loadComponent("#footer-placeholder", "../components/footer/footer.html");
  // loadComponent("#button-placeholder", "../components/common/button.html");
});

// 브라우저 감지
function browserDetector() {
  // Edge
  if (navigator.userAgent.includes('Edg')) {
    document.body.classList.add('edge');
    alert('edge');
  }

  // Whale
  if (navigator.userAgent.includes('Whale')) {
    document.body.classList.add('whale');
    alert('whale');
  }
}

function textQr() {

}

// 공통 컴포넌트 로드 함수
function loadComponent(selector, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch((error) => console.error("Error loading component:", error));
}
