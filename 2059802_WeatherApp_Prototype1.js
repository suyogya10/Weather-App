var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(); //this gives todays date with day,month and year
document.getElementById("date").innerHTML = date
  // Fetch Kathmandu weather data from Open Weather API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=9190fa609f85c486abf5e59e0ee10b24')

// Convert response string to json object
.then(response => response.json())
.then(response => {

// Display whole API response in browser console
console.log(response);
    
//Converting Temperature values from Kelvin to Celcius
var maintemp = parseInt((response.main.temp) - 273.15)
var maxtemp = parseInt((response.main.temp_max) - 273.15)
var mintemp = parseInt((response.main.temp_min) - 273.15)
var feelslike = parseInt((response.main.feels_like) - 273.15)

//Putting elemets of responce to HTML paragraphs
document.querySelector(".maintemp").innerHTML = maintemp
document.querySelector(".maxtemp").innerHTML = maxtemp
document.querySelector(".mintemp").innerHTML = mintemp
document.querySelector(".feelslike").innerHTML = feelslike
document.querySelector(".humidity").innerHTML = response.main.humidity
document.querySelector(".description").innerHTML = response.weather[0].description

//Calling icons according to weather
const icon= response["weather"][0]["icon"];
document.getElementById("icon").innerHTML="<img src='http://openweathermap.org/img/wn/"+icon+".png'>"
    
})
.catch(err => {

// Display errors in console
console.log(err);
});		