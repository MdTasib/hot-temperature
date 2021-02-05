const inputValue = document.getElementById('input');
const name = document.getElementById('name');
const temp = document.getElementById('temp');
const lead = document.getElementsByClassName('lead');
const btn = document.getElementById('search');

btn.addEventListener('click', function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=9f34c41a651d2674e07557230cca656b`)
        .then(response => response.json())
        .then(data => {
            const nameValue = data['name'];
            const tempValue = data['main']['temp'];
            const leadValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = `${tempValue} Kelvin`;
            lead.innerHTML = leadValue;
        })
        .catch(error => {
            alert('Wrong city name');
        })
    inputValue.value = '';
})