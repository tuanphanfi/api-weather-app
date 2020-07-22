import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div className="container-fluid text-white my-auto">

                <div className="container mx-auto my-4 py-4">
                    <div className="row justify-content-center text-center">
                        <h1 className="col-12 display-4 my-2 py-3 text-success">
                            Awesome Weather App
            </h1>
                        <h2 className="col-12"> {this.state.weather.name}</h2>
                        <h3 className="col-12 text-danger">{this.state.weather.main.temp}</h3>
                        <h3 className="col-12"> {this.state.weather.weather[0].description}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
