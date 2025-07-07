async function checkweather(ncity){
  try {
    let response = await fetch(apiurl + ncity + `&appid=${apikey}`);
    if (!response.ok) {
      alert("City not found. Please try again.");
      return;
    }
    let data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      icon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "mist.png";
    }
    
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
}

searchbox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkweather(searchbox.value);
  }
});
