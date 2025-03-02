document.addEventListener('DOMContentLoaded', function () {
    const screen3title = "Мы выяснили какой товар вам понравится! Заполните форму для заявки.";
    const screen3description = "Чай Пуэр";
    document.getElementById('screen3_title').textContent = screen3title;
    document.getElementById('screen3_description').textContent = screen3description;
    function getCountryInfo() {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country_code;
                const countryName = data.country_name;
                const phoneCode = data.country_calling_code;
                const flagURL = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
                const phoneCodeElement = document.getElementById('phone_code');
                const flagImg = document.createElement('img');
                flagImg.src = flagURL;
                flagImg.alt = countryName;
                flagImg.className = 'country-flag';
                flagImg.style.width = '50px';
                phoneCodeElement.innerHTML = '';
                phoneCodeElement.appendChild(flagImg);
                phoneCodeElement.appendChild(document.createTextNode(`+${phoneCode}`));
            })
            .catch(error => {
                console.error('Ошибка при получении информации о стране:', error);
                document.getElementById('phone_code').textContent = '+7';
            });
    }
    getCountryInfo();
    const form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.classList.remove('hidden');
        thankYouMessage.classList.add('show');
        form.style.display = 'none'; 
    });
});