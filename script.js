// script.js
// Получение элементов
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');

// Инициализация переменных
let score = 0;
let clickValue = 1;

// Функция для загрузки сохранённого счёта из localStorage
function loadScore() {
    const savedScore = localStorage.getItem('clickerScore');
    const savedClickValue = localStorage.getItem('clickValue');

    if (savedScore !== null) {
        score = parseInt(savedScore, 10); // Загрузка счёта
    }

    if (savedClickValue !== null) {
        clickValue = parseInt(savedClickValue, 10); // Загрузка значения клика
    }

    scoreElement.textContent = `Score: ${score}`;
}

// Функция для сохранения текущего счёта и значения клика в localStorage
function saveScore() {
    localStorage.setItem('clickerScore', score);
    localStorage.setItem('clickValue', clickValue);
}

// Обработчик клика по основной кнопке
clickButton.addEventListener('click', () => {
    score += clickValue;
    scoreElement.textContent = `Score: ${score}`;
    saveScore(); // Сохранение счёта после каждого клика
});

// Обработчики кликов по кнопкам улучшений
upgrade1Button.addEventListener('click', () => {
    if (score >= 10) { // Проверка, достаточно ли очков для улучшения
        score -= 10;
        clickValue += 1; // Увеличение значения клика
        scoreElement.textContent = `Score: ${score}`;
        saveScore(); // Сохранение счёта и улучшения
    }
});

upgrade2Button.addEventListener('click', () => {
    if (score >= 50) { // Проверка, достаточно ли очков для улучшения
        score -= 50;
        clickValue += 5; // Увеличение значения клика
        scoreElement.textContent = `Score: ${score}`;
        saveScore(); // Сохранение счёта и улучшения
    }
});

// Загрузка сохранённых данных при загрузке страницы
window.onload = loadScore;
