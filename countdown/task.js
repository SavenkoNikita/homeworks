const timerElement = document.getElementById('timer');

if (timerElement) {
    // Преобразуем начальное значение в число
    let timeLeft = parseInt(timerElement.innerText, 10);
    
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
} else {
    console.error('Элемент с id "timer" не найден');
}