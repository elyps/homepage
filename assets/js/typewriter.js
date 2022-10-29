var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<span style="color: rgba(232, 62, 140, 1.00);">Software</span> Developer, Designer ')
  .pauseFor(300)
  .deleteChars(9)
  .typeString(' <span style="color: rgba(232, 62, 140, 1.00);">UI/UX</span> Designer ')
  .typeString('and <span style="color: rgba(232, 62, 140, 1.00);">Open</span>-Sourcerer!')
  .pauseFor(50000)
  .start();
