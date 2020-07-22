import React, { Component } from 'react'

export default class Box extends Component {
    constructor(){
        super()
        console.log('box-constrctore')
    }
    componenetWillUnmount(){
        console.log("box-im done")
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
