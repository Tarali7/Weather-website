const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails= document.querySelector('.weather-details');

search.addEventListener('click',() => {

    const APIKey = '9ec48eb7482e6f04ea1acecd9a4b09c8';
    const city = document.querySelector('.search-box input').value;

    if(city =='')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json =>{

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'https://cdn-icons-png.freepik.com/256/8915/8915040.png?semt=ais_hybrid';
                break;

                case 'Rain':
                    image.src =' https://cdn-icons-png.freepik.com/256/6635/6635762.png?semt=ais_hybrid' ;
                    break;
                    

                    case 'Snow':
                    image.src = 'https://cdn-icons-png.freepik.com/256/6566/6566033.png?semt=ais_hybrid ';
                    break;
                    
                    case 'Clouds':
                    image.src =' https://cdn-icons-png.freepik.com/256/16227/16227679.png?semt=ais_hybrid' ;
                    break;
                   
                    case 'Mist':
                    image.src =' https://cdn-icons-png.freepik.com/256/11838/11838210.png?semt=ais_hybrid';
                    break;

                    case 'Haze':
                        image.src ='https://cdn-icons-png.freepik.com/256/16221/16221394.png?semt=ais_hybrid'; 
                        break;
                    default:
                    image.src ='data:image/png;base64,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';
                    
        }
        temperature.innerHTML = '${}';

    });
});