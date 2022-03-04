const API_KEY = `b2ebdf59be34c9f84dbc09646431f2b4`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    city.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (city == '') {
        document.getElementById('error-message').style.display = 'block';
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data))
    }
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
