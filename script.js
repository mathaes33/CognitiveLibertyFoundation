document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for supporting Cognitive Liberty!');
  this.reset();
});
