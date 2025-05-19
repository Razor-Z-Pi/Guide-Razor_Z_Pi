window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  
  // Задержка для демонстрации (можно убрать)
  setTimeout(() => {
    preloader.classList.add('preloader--hidden');
    
    // Полное удаление из DOM через 0.5s (опционально)
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1000); // Уменьшите до 0, если не нужна задержка
});