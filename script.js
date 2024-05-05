const apiKey = "24b32f5f46d41a94bf613baf38715e6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function searchBtn(){
    checkWeather(document.querySelector(".search input").value);
}

async function checkWeather(city){

    const response = await fetch(apiUrl + city + '&appid=' +apiKey)
    var data = await response.json();
    try {
        var imgWeather = data.weather[0].main;
        console.log(data.weather[0].main);
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
        document.querySelector(".weather img").setAttribute("src", "lib/img/"+imgWeather+".png");
    } catch (error) {
        if(data.cod == 404){
            console.log("Erreur: une erreur c'est produite lors de la requete au serveur. Veuillez verifier l'ortographe de la ville");
        }
    }
    
}

checkWeather("Abidjan");

function searchBtn(){
    const searchBox = document.querySelector(".search input").value;
    checkWeather(searchBox);
}