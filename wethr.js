let apiKey = "9920258e026c5e3776dcce427a06d639";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.getElementById("input");
let btn = document.getElementById("serch");
let weatherIcon = document.querySelector(".wther-icon");

async function weatherChk(city) {
    let res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (res.status == 404) {
        document.querySelector('.error').classList.add("show");
        document.querySelector('.weather').classList.remove("show");
    }
    else {
        let data = await res.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector('.error').classList.remove("show");
        document.querySelector('.weather').classList.add("show");
        input.value = "";
    }

};

btn.addEventListener("click", () => {
    weatherChk(input.value);

});
