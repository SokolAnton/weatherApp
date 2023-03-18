const ApiKey = "77349390d4039985df9b14f47c2047f9";

const iconMaker = (iconID) => `https://openweathermap.org/img/wn/${iconID}@2x.png`
     

const getWeather = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${units}`;

  const response = await fetch(URL)
    .then((res) => res.json())
    .then((response) => response);

    const {
        weather,
        main:{temp,feels_like, temp_min,temp_max,pressure,humidity},
        wind:{speed},
        sys:{country},
        name,
    } = response;

    const {description, icon} =weather[0];

    return {
        description,
        iconURL: iconMaker(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    };
    
}

export default  getWeather;