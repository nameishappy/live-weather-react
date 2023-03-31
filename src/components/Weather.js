import React, { useState } from "react";
import Spinner from "./Spinner";
export default function Weather() {
  const [city, setCity] = useState("");
  const [name, setName] = useState("Enter city name");
  const [temp, setTemp] = useState("Temp");
  const [desc, setDesc] = useState("Description");
  const [icon, setIcon] = useState("10d");
  const [wind, setWind] = useState("Wind speed");
  const [pressure, setPressure] = useState("Pressure");
  const [humidity, setHumidity] = useState("humidity");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const updateWeather = async (e) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0beb5f5fad0ca562d5bd390299b903bc&units=metric`;
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setName(parsedData.name);
      setTemp(parsedData.main.temp);
      setDesc(parsedData.weather[0].description);
      setIcon(parsedData.weather[0].icon);
      setWind(parsedData.wind.speed);
      setHumidity(parsedData.main.humidity);
      setPressure(parsedData.main.pressure);
      setLoading(false);
    } catch {
      setLoading(false);
      window.alert("city not found");
      setName("Enter city again");
      setTemp("Temp");
      setDesc("Description");
      setIcon("10d");
      setWind("Wind Speed");
      setHumidity("Humidity");
      setPressure("Pressure");

    }
  };
  //   updateWeather();
  return (
    <div>
      <section
        style={{ background: `url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp) no-repeat center center fixed`  }}
      >
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <h2 className="text-center" style={{ color: "Black" }}>
                Search For Your City
              </h2>
              <div className="searchBar my-2">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded"
                    onChange={handleChange}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={updateWeather}
                  >
                    search
                  </button>
                </div>
              </div>
              {loading && <Spinner />}
              <div
                className="card"
                style={{ color: "#4B515D", borderRadius: "35px",backgroundImage:"linear-gradient(white,#6fc1f4)" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex">
                    <h6 className="flex-grow-1">{name}</h6>
                    <h6>{new Date().toLocaleTimeString()}</h6>
                  </div>

                  <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6
                      className="display-4 mb-0 font-weight-bold"
                      style={{ color: "#1C2331" }}
                    >
                      {temp} &#8451;
                    </h6>
                    <span className="small" style={{ color: "#868B94" }}>
                      {desc}
                    </span>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                      <div>
                        <i
                          className="fa-solid fa-wind"
                          style={{ color: "#868B94" }}
                        ></i>{" "}
                        <span className="ms-1"> {wind} km/h</span>
                      </div>
                      <div>
                        <i
                          className="fas fa-tint fa-fw"
                          style={{ color: "#868B94" }}
                        ></i>{" "}
                        <span className="ms-1"> {humidity}% </span>
                      </div>
                      <div>
                        <i
                          className="fas fa-sun fa-fw"
                          style={{ color: "#868B94" }}
                        ></i>{" "}
                        <span className="ms-1"> {pressure} Pa </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="desc weather"
                        width={"125px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
