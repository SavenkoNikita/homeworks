(() => {
    let dead = 0;
    let lost = 0;
    
    // Функция для получения элемента лунки по индексу
    const getHole = index => document.getElementById(`hole${index}`);
    
    // Функция для проверки условий победы/поражения и сброса игры
    const checkGameStatus = () => {
      if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
      } else if (lost >= 5) {
        alert('Поражение! У вас 5 промахов!');
        resetGame();
      }
    };
    
    // Функция для сброса игры
    const resetGame = () => {
      dead = 0;
      lost = 0;
      updateScore();
    };
    
    // Функция для обновления счетчиков на странице
    const updateScore = () => {
      document.getElementById('dead').textContent = dead;
      document.getElementById('lost').textContent = lost;
    };
    
    // Обработчик клика по лунке
    const handleHoleClick = (event) => {
      const hole = event.target;
      
      // Проверяем, есть ли в лунке крот
      if (hole.classList.contains('hole_has-mole')) {
        dead++;
      } else {
        lost++;
      }
      
      updateScore();
      checkGameStatus();
    };
    
    // Назначаем обработчики кликов для всех лунок
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.addEventListener('click', handleHoleClick);
    }
    
    // Инициализируем счетчики
    updateScore();
  })();