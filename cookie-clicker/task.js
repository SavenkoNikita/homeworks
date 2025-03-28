// Получаем элементы печеньки и счетчика
const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

// Инициализируем счетчик кликов
let clicks = 0;

// Обработчик клика по печеньке
cookie.onclick = function() {
    // Увеличиваем счетчик кликов
    clicks++;
    clickCounter.textContent = clicks;
    
    // Чередуем размер печеньки
    if (cookie.width === 200) {
        cookie.width = 180;
        cookie.height = 180; // Неявно устанавливаем высоту, чтобы сохранить пропорции
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
};