const key = '2c06f04413a5cc6213b1567db6a83563';

//Get Elements
let currentCity = document.getElementById('city')
let icon = document.querySelector('.img')
let temp = document.getElementById('temp')
let gen = document.getElementById('general')
let humidity = document.getElementById('humidity')
let tempMax = document.getElementById('tempMax')
let tempMin = document.getElementById('tempMin')

let features = document.querySelector('.features')
let content = document.querySelector('.content')

// let form = document.getElementById('formData')
let btn = document.getElementById('search')
let city = document.getElementById('cityName')

// 


const getData=(e)=>{
    e.preventDefault()
    let cityVal = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=metric`

  
    city.value=""
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            content.innerHTML=`<h1 class="cityname">${data.name}</h1>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon"/>

            <h1 id="temp">${data.main.temp} &#8451</h1>
            <div class="features">
                <div>
                    <p>Desciption</p>
                    <p>${data.weather[0].description}</p>
                </div>
                <div>
                    <p>Humidity</p>
                    <p>${data.main.humidity}</p>
                </div>
                <div>
                    <p>Max Temp.</p>
                    <p>${data.main.temp_max} &#8451</p>
                </div>
                <div>
                    <p>Min Temp.</p>
                    <p>${data.main.temp_max} &#8451</p>
                </div>
                
            </div>
            `
        })
        .catch(()=>{
            content.innerHTML='<h2>City Not Found</h2>'
            city.value = ''
        })
    
    
    
}

btn.addEventListener('click',getData)

