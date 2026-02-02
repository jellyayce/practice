function WeatherCard({weather}){
    
    if (!weather) return null;
    if (!weather.main) {
        return (
        <div>
            <h2>City Not Found.</h2>
        </div>
        );
    }
    return(
        <>
            <div className="weather-card">
                <h2>City: {weather.name}</h2>
                <p>Temperature: {weather.main.temp} °C</p>
                <p>Description: {weather.weather[0].description}</p>
            </div>
        </>
    );
}
export default WeatherCard