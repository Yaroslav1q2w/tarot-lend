const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	card.addEventListener("click", (event) => {
		event.currentTarget.classList.toggle("flipped");
	});
});

const cardContainer = document.getElementById("cardContainer");
const shuffleButton = document.getElementById("shuffleButton");

shuffleButton.addEventListener("click", shuffleCards);

function shuffleCards() {
	const cards = Array.from(cardContainer.querySelectorAll(".card"));

	console.log(cards);

	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		cardContainer.insertBefore(cards[j], cards[i]);
	}

	cards.forEach((card, index) => {
		const left = index * 30;
		card.style.transition = "transform 0.5s ease";
		card.style.transform = `translateX(${left}px) `;
	});

	setTimeout(() => {
		cards.forEach((card) => {
			card.style.transition = "";
			card.style.transform = "";
		});
	}, 500);
}

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		let overlay = document.querySelector(".overlay");
		overlay.style.opacity = "0";
	}, 1000);
});
