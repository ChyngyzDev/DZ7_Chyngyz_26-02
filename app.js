const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const btn = document.querySelector('#btn')

const api = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const searchCity = () => {
    cityName.addEventListener('input', () => {
        let cityValue = cityName.value.trim();

        if (cityValue === '') {
            city.innerHTML = 'Введите название "города"';
            temp.innerHTML = '';
        } else {
            fetch(`${api}?q=${cityValue}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    city.innerHTML = data?.name ? data.name : 'Город не найден';
                    temp.innerHTML = data?.main ? Math.round(data.main.temp - 273) + '&deg;C' : '...';
                });
        }
    });
}
searchCity();
