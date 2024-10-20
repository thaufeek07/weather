import logo from './logo.png';
import setting from './settings.png';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';


function App() {
const [city, setCity] = useState('Pappireddipatti');
const [units, setUnits] = useState('celsius');
const [country, setCountry] = useState('IN');
const [lat, setLat] = useState(11.9145813);
const [lon, setLon] = useState(78.346893);
const [pincode, setPincode] = useState(636905);
const [time, setTime] = useState(5);

const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);


  const [Chennai, setChennai] = useState({
    "coord": {
        "lon": 78.3784,
        "lat": 12.0021
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.43,
        "feels_like": 297.24,
        "temp_min": 296.43,
        "temp_max": 296.43,
        "pressure": 1014,
        "humidity": 93,
        "sea_level": 1014,
        "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.86,
        "deg": 354,
        "gust": 1.12
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1729388182,
    "sys": {
        "country": "IN",
        "sunrise": 1729384596,
        "sunset": 1729427135
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pappireddipatti",
    "cod": 200
});
  const [Mumbi, setMumbi] = useState({
    "coord": {
        "lon": 78.3784,
        "lat": 12.0021
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.43,
        "feels_like": 297.24,
        "temp_min": 296.43,
        "temp_max": 296.43,
        "pressure": 1014,
        "humidity": 93,
        "sea_level": 1014,
        "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.86,
        "deg": 354,
        "gust": 1.12
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1729388182,
    "sys": {
        "country": "IN",
        "sunrise": 1729384596,
        "sunset": 1729427135
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pappireddipatti",
    "cod": 200
});
  const [Kolkata, setkolkata] = useState({
    "coord": {
        "lon": 78.3784,
        "lat": 12.0021
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.43,
        "feels_like": 297.24,
        "temp_min": 296.43,
        "temp_max": 296.43,
        "pressure": 1014,
        "humidity": 93,
        "sea_level": 1014,
        "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.86,
        "deg": 354,
        "gust": 1.12
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1729388182,
    "sys": {
        "country": "IN",
        "sunrise": 1729384596,
        "sunset": 1729427135
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pappireddipatti",
    "cod": 200
});
  const [Dheli, setDheli] = useState({
    "coord": {
        "lon": 78.3784,
        "lat": 12.0021
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.43,
        "feels_like": 297.24,
        "temp_min": 296.43,
        "temp_max": 296.43,
        "pressure": 1014,
        "humidity": 93,
        "sea_level": 1014,
        "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.86,
        "deg": 354,
        "gust": 1.12
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1729388182,
    "sys": {
        "country": "IN",
        "sunrise": 1729384596,
        "sunset": 1729427135
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pappireddipatti",
    "cod": 200
});
  const [fetcData, setfetcData] = useState({
    "coord": {
        "lon": 78.3784,
        "lat": 12.0021
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.43,
        "feels_like": 297.24,
        "temp_min": 296.43,
        "temp_max": 296.43,
        "pressure": 1014,
        "humidity": 93,
        "sea_level": 1014,
        "grnd_level": 964
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.86,
        "deg": 354,
        "gust": 1.12
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1729388182,
    "sys": {
        "country": "IN",
        "sunrise": 1729384596,
        "sunset": 1729427135
    },
    "timezone": 19800,
    "id": 1260681,
    "name": "Pappireddipatti",
    "cod": 200
});

  return (
    <div className="App">
      <body>
        <nav className='logo-text'>
          <img className='logo' src={logo} alt="Logo" /> <div className="title">Weather Forecast</div>
        </nav>
        <main>
          <div className='cities'>
            <Card title={Dheli.name} body={Dheli} footer="Footer" />
            <Card title={Mumbi.name} body={Mumbi} footer="Footer" />
            <Card title={Kolkata.name} body={Kolkata} footer="Footer" />
            <Card title={Chennai.name} body={Chennai} footer="Footer" />
          </div>

          <div className='search'>



            <fieldset>
              <legend> <img className='parm-logo' src={setting} alt="setting" /><div className='text-conf-title'>DataFetching Configuration</div></legend>
              <div className='txt-gio'>
                <label className='txt'>Lat & Long</label>
                <input value={lat} type="text" placeholder='Lat' />
                <input value={lon} type="text" placeholder='Lon' /> <label>Or</label>
                </div>

                
                <div className='txt-pin'>
                  <label className='txt'>Zip Code</label>
                  <input value={pincode} type="text" placeholder='PinCode' /> 
                  <label>Or</label> 
                </div>

                <div className='txt-city'>
                  <label className='txt'>City Name</label>
                  <input value={city} type="text" placeholder='City Name' />
                  <input value={country} type="text" placeholder='Contory Code' />
                </div>

              <div className='date'>
              <label className='txt'>Time & Units</label>
                <input value={time} type="number" placeholder='Frequency in Munites' />

                <select>
                  <option value="select">Select Units</option>
                  <option value="°C"> °C</option>
                  <option value="°F"> °F</option>
                </select>

                </div>
                <div className='date'>
                  <div className='date'><label className='txt'>Start Date</label>
                    <input type="date" /> </div>
                  <div className='txt'> <label className='txt'>End Date</label></div>
                  <input type="date" />
                </div>

              
              <div className='button-bar'>
                <input className='submit' type="Submit" value="Fetch" />

              </div>

            </fieldset>


            <div className='info-panel'>

              <div>
                <div className='text-title'>
                  <img className='parm-logo' src={logo} alt="Logo" />

                  Weather Parameters of {fetcData.name}

                </div>

              </div>
              <div className='text-row'>Avg Temp :{fetcData.main.temp }</div>
              <div className='text-row'>Min Temp :{fetcData.main.temp_min }</div>
              <div className='text-row'>Max Temp :{fetcData.main.temp_max }</div>
              <div className='text-row'>Wind Speed :{fetcData.wind.speed }</div>
              <div className='text-row'>Humidity :{fetcData.main.humidity }</div>
              <div className='text-row'>Weather Condition :{  fetcData.weather[0].description }</div>

            </div>

          </div>

        </main>
        <footer>

        </footer>
      </body>

    </div>
  );
}

export default App;