import React from "react";
import "./App.css";
import WeatherBg from "./components/weather-input/WeatherBg";

function App() {
  // const [islogin, setIsLogin] = useState(true);

  // const loginHandler = () => {
  //   setIsLogin(true);
  // };

  // const logoutHandler = () => {
  //   setIsLogin(false);
  // };

  return (
    <React.Fragment>
      <WeatherBg />
    </React.Fragment>
  );
}

export default App;
