function goToScreen2() {
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.add('show');
    startLoadingAnimation();
}
function startLoadingAnimation() {
    const analysisLines = document.querySelectorAll('#screen2 .analysis_text p');
    const analysisText = [
        "Смотрим на результаты...",
        "Ещё чуть чуть...",
        "Спасибо за ожидание..."
    ];
    analysisLines.forEach((line, index) => {
        line.textContent = analysisText[index];
    });
    setTimeout(() => {
        analysisLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('show');
            }, index * 1500);
        });
    }, 1000);
    setTimeout(() => {
        goToScreen3();
    }, analysisLines.length * 1500 + 1000);
    function goToScreen3() {
        document.getElementById('screen2').classList.remove('show');
        document.getElementById('screen2').classList.add('hidden');
        document.getElementById('screen3').classList.remove('hidden');
        document.getElementById('screen3').classList.add('show');
    }
}



