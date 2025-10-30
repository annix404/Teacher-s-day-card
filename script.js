function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
    }
}
createConfetti();