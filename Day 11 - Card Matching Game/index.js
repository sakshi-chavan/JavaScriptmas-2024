const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis
const gameContainer = document.querySelector('.game-container'); 
const restartGame = document.getElementById('restart');
let revealedCards = [];
let matchedPairs = 0;

function startGame() {
    gameContainer.innerHTML = ''; 
    revealedCards = [];
    matchedPairs = 0;
    restartGame.style.display = 'none';
    
    const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

    shuffledEmojis.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden'); 
        card.dataset.emoji = emoji;
        card.addEventListener('click', () => toggleCard(card));
        gameContainer.appendChild(card);
    });
}

function toggleCard(card) {
    if (card.classList.contains('revealed') || revealedCards.length === 2) return;

    card.textContent = card.dataset.emoji;
    card.classList.remove('hidden'); 
    card.classList.add('revealed');
    revealedCards.push(card);

    if (revealedCards.length === 2) {
        matchCards();
    }
}

function matchCards() {
    const [card1, card2] = revealedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        revealedCards = [];

        if (matchedPairs === emojis.length) {
            setTimeout(() => {
                alert('Congratulations! You found all pairs.');
                console.log("Congratulations! You found all pairs.")
                restartGame.style.display = 'block';
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.add('hidden'); 
            card1.classList.remove('revealed');
            card2.classList.add('hidden'); 
            card2.classList.remove('revealed');
            revealedCards = [];
        }, 1000);
    }
}

restartGame.addEventListener('click', startGame);

startGame();
