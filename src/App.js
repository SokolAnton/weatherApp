// import Hot from './assets/img/hot.jpg'
import Cold from './assets/img/cold.jpg'
import { Description} from './Components'


function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Cold})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input
              type="text"
              name="city"
              placeholder="Enter your city..."
              id=""
            />
            <button>&deg;F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 &deg;C</h1>
            </div>
          </div>
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
