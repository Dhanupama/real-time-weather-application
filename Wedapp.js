const apiKey ="086f7d16055afb8919befe810041953a3000";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=colombo";

const searchBox = document.querySelector(" .search input");
const searchBtn = document.querySelector(" .search button");


async function checkWeather(city){
    const respose = await fetch(apiUrl+city+'&appid=${apiKey}');
    var data = await respose. json();

    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+"Km/h";
    
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

