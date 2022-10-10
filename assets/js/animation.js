function reveal(cl) {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(cl);
    } else {
      reveals[i].classList.remove(cl);
    }
  }
}
window.addEventListener("scroll", reveal.bind(this, "active"), false);
window.addEventListener("scroll", reveal.bind(this, "animationSlogan"), false);

// To check the scroll position on page load
reveal();
