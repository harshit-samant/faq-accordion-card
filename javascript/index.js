let no = 0;
let rotation = 0;
for (let i = 0; i < document.querySelectorAll('.arrow-down').length; i++) {
  document.querySelectorAll('a')[i].addEventListener('click', function() {
    no = Number(this.id);
    document.querySelectorAll('h6')[no].classList.toggle('click');
    rotation += 180;
    if (rotation === 360) {
      rotation = 0;
    }
    document.querySelectorAll(".arrow-down")[no].style.transform = `rotate(${rotation}deg)`;
  });
}
