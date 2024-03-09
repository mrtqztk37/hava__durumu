const cityInput=document.querySelector(".inputText")
const btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{
const cityName=cityInput.value
    getData(cityName)

})
function getData(name){
     const API = "ce96cb0539cdee881b814788526a2448";
     const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
     
    fetch(baseURL)
    .then(res =>res.json())
    .then(data => {
        const {name,sys:{country},main:{temp,feels_like,humidity},weather:[{description}],wind:{speed}}=data;
            console.log(name,country,temp,feels_like,humidity,description,speed)

            //verileri js den çekme işlemi
            const city=document.querySelector(".city")
            const temperature=document.querySelector(".temp")
            const hum=document.querySelector(".humidity")
            const wind=document.querySelector(".wind")
            const weatherDesc=document.querySelector(".weather")
            const feeling=document.querySelector(".feeling")

            //js e çekilen elemanları yerine yerleştirme

        city.textContent=`${name}, ${country}`
        temperature.textContent=`${temp.toFixed(0)}°`
        hum.innerHTML=`Nem: ${humidity}` 
        wind.innerHTML=`Rüzgar: ${speed} km/s` 
        weatherDesc.innerHTML=`${description.toUpperCase()}`
        feeling.innerHTML=`Hissedilen Sıcaklık: ${feels_like.toFixed()}°`
    })
    .catch(err => console.log(err))

    cityInput.value="";
    cityInput.focus();
     

    };

