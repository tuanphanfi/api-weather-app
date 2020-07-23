import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from './components/Nav'
// import Body from './components/Body'
import Buttons from './components/Buttons'
let apiKey = process.env.REACT_APP_APIKEY
console.log(apiKey)
export default class App extends Component {

  // this go first
  constructor(props) {
    super(props)
    this.state = {
      weather: null,
      cityName: null,
    }
  }

  setCityName(name) {
    this.setState({
      cityName: name,
      weather: null,
    }, this.callWeather);
  }

  // whenever i load the page i will call the function callWeather
  // this do at the end
  componentDidMount() {

    this.getLocation()

  }
  // 1. how can i change the city
  // 2. how can i get weather by my current location

  getLocation = () => {
    console.log("get location")
    navigator.geolocation.getCurrentPosition((post) => {
      console.log(post)
      this.getWeather(post.coords.latitude, post.coords.longitude)
    })
  }
  async getWeather(latitude, longitude) {
    // const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      weather: data
      // put in more here
    });
  };




  callWeather = async () => {
    console.log(apiKey)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${apiKey}&units=metric`;
    let data = await fetch(url)
    let result = await data.json()
    console.log("result?", result)

    // set weather = result into state
    this.setState({ weather: result })
    // fetch()
  }

  render() {
    if (this.state.weather === null) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <div>
        <Nav></Nav>
        <div className="row">
          <Buttons setCityNameFromApp={this.setCityName.bind(this)} />
          {/* <Body></Body> */}
          <div className="col-10 container-fluid text-white my-auto">

            <div className="container mx-auto my-4 py-4">
              <div className="row justify-content-center text-center">
                <h1>{this.state.cityName}</h1>
                <h1 className="col-12 display-4 my-2 py-3 text-success">
                  Awesome Weather App
            </h1>
                <h2 className="col-12"> {this.state.weather.name}</h2>
                <h3 className="col-12 text-danger">{this.state.weather.main.temp}</h3>
                <h3 className="col-12"> {this.state.weather.weather[0].description}</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
   );
  }
}