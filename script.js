const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const song = document.getElementById('song');

let yesSize = 18;

noBtn.addEventListener('click', () => {
  yesSize += 5;
  yesBtn.style.fontSize = `${yesSize}px`;
  if (yesSize >= 60) {
    noBtn.style.display = 'none';
  }
});

yesBtn.addEventListener('click', () => {
  song.play();
  alert("Yay! I’m so happy you said yes ❤️");
});
