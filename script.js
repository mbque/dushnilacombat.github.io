let score = 0;
let clickValue = 1;

// Обновление текста очков
const updateScore = () => {
    document.getElementById('score').innerText = `Score: ${score}`;
};

// Нажатие кнопки
document.getElementById('click-button').addEventListener('click', () => {
    score += clickValue;
    updateScore();
});

// Улучшения
document.getElementById('upgrade1').addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        clickValue += 1;
        updateScore();
    } else {
        alert('Not enough points for Upgrade 1!');
    }
});

document.getElementById('upgrade2').addEventListener('click', () => {
    if (score >= 50) {
        score -= 50;
        clickValue += 5;
        updateScore();
    } else {
        alert('Not enough points for Upgrade 2!');
    }
});
