document.getElementById('revealMessageBtn').addEventListener('click', function() {
    const startDate = new Date('2024-11-19');
    updateCounter(startDate);
    setInterval(() => updateCounter(startDate), 1000);
    createFallingHearts();
    playMusic();
});

function updateCounter(startDate) {
    const today = new Date();
    const timeDifference = today - startDate;
    const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursTogether = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesTogether = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsTogether = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = daysTogether;
    document.getElementById('hours').textContent = hoursTogether;
    document.getElementById('minutes').textContent = minutesTogether;
    document.getElementById('seconds').textContent = secondsTogether;
    
    document.getElementById('counter').classList.remove('hidden');
}

function createFallingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);
    }
}

function playMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play();
}
