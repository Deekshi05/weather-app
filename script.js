let apikey= "38648ccd248445265b1c7aa80c33c10a";
let apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector(".search button");


async function checkweather(city){
  let response=await fetch(apiurl + city + `&appid=${apikey}`);
  let data=await response.json();
  console.log(data);
  let city=document.querySelector(".city");
  city.innerHTML=data.name;
  let temp=document.querySelector(".temp");
  temp.innerHTML=Math.round(data.main.temp)+"°C";
  let humidity=document.querySelector(".humidity");
  humidity.innerHTML=data.main.humidity+"%";
let wind=document.querySelector(".wind");
wind.innerHTML=data.wind.speed+"km/hr";
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})