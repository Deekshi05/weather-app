let apikey= "38648ccd248445265b1c7aa80c33c10a";
let apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector(".search button");
let icon=document.querySelector(".weather-icon");

async function checkweather(ncity){
  let response=await fetch(apiurl + ncity + `&appid=${apikey}`);
  let data=await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
  if(data.weather[0].main=="Clouds"){
      icon.src="clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    icon.src="clear.png";
}
else if(data.weather[0].main=="Rain"){
  icon.src="rain.png";
}
else if(data.weather[0].main=="Drizzle"){
  icon.src="drizzle.png";
}
else if(data.weather[0].main=="Mist"){
  icon.src="mist.png";
}
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})