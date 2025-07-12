/* app.js */
const cards = ['card1.png', 'card2.png', 'card3.png', 'card4.png', 'card5.png', 'card6.png', 'card7.png', 'card8.png', 'card9.png','card10.png','card11.png' ]; // Replace with your actual filenames

function drawCard() {
  const button = document.getElementById("drawBtn");
  button.style.display = "none";

  const cardContainer = document.getElementById("cardContainer");

  const music = document.getElementById("bg-music");
  music.play();

  cardContainer.innerHTML = `<p style="font-size:18px;"><br>Shuffling...</p>`;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    cardContainer.innerHTML = `
      <img id="drawnCard" src="images/${selectedCard}" alt="Healing Card" class="card" />
    `;
cardContainer.innerHTML = `
  <div class="sparkle-wrapper">
    <img id="drawnCard" src="images/${selectedCard}" alt="Healing Card" class="card" />
    <div class="sparkle" style="top: 15%; left: 20%; animation-delay: 0s;"></div>
    <div class="sparkle" style="top: 40%; left: 65%; animation-delay: 0.3s;"></div>
    <div class="sparkle" style="top: 70%; left: 30%; animation-delay: 0.6s;"></div>
    <div class="sparkle" style="top: 25%; left: 75%; animation-delay: 1s;"></div>
  </div>
`;

    const img = document.getElementById('drawnCard');
    setTimeout(() => {
      img.classList.add('show');
    }, 50);
  }, 1000);
	
const promptText = document.getElementById("promptText");
promptText.classList.add("fade-out");

setTimeout(() => {
  promptText.innerHTML = "May this gift serve your heart, your light, and your next beautiful step forward.<br>I wish you a month full of little moments that remind you how far you've come,<br> and how much light still waits for you ahead.";
  promptText.classList.remove("fade-out");
}, 1000);


}



// JavaScript Document
