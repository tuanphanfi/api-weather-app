import React, { Component } from 'react'

export default class Buttons extends Component {


    render() {
        let city = ['Saigon', 'Paris', 'New York', 'Miami', 'San Francisco', 'Moscow', 'Tokyo', 'Vancouver']

        let getCityName = (item) => {
            console.log(item)
        }
        return (
            <div className="col-2">
                {
                    city.map((item, index) =>
                        <button onClick={() => this.props.setCityNameFromApp(item)}>{item}</button>

                    )
                }
            </div>
        )
    }
}
;;;