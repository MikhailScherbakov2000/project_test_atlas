document.addEventListener('DOMContentLoaded', function () {
    const screen1title = "Чай";
    const screen1subtitle = "«Чай — это искусство наслаждения моментом»";
    document.getElementById('screen1_title').textContent = screen1title;
    document.getElementById('screen1_subtitle').textContent = screen1subtitle;
    const timeElement = document.getElementById('time');
    let timeLeft = 120;
    let timer;
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timeElement.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Время вышло');
            goToScreen2();
        }

        timeLeft--;
    }
    timer = setInterval(updateTimer, 1000);
    const questions = document.querySelectorAll('.question');
    const nextButton = document.getElementById('next_button');
    let currentQuestionIndex = 0;
    document.querySelectorAll('input[type=radio]').forEach(input => {
        input.addEventListener('change', () => {
            nextButton.disabled = false;
        });
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].style.display = 'none';
            currentQuestionIndex++;
            questions[currentQuestionIndex].style.display = 'flex';
            nextButton.disabled = true;
        } else {
            goToScreen2();
        }
    })
    
});