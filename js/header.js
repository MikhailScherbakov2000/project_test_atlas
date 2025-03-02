document.addEventListener('DOMContentLoaded', function () {
    const headerButton = document.getElementById('button_header');
    const screen1 = document.getElementById('screen1');

    if (headerButton && screen1) {
        headerButton.addEventListener('click', function () {
            screen1.classList.remove('hidden');
            screen1.classList.add('active');
            headerButton.style.display = 'none';
            const screens = document.querySelectorAll('section.screen');
            screens.forEach(screen => {
                if (screen.id !== 'screen1') {
                    screen.classList.remove('active');
                    screen.classList.add('hidden');
                }
            });
        });
    } else {
        console.error('Кнопка или экран не найдены!');
    }
});