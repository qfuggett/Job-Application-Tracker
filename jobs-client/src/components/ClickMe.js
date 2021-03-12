//Assessment Live Coding: create a button when clicked, a counter is displayed outside the button that increments by 1
import React, { Component } from 'react'

class ClickMe extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    render(){

        return(
            <>
            <div>
                <h2>Count <span id="count">{this.state.count}</span></h2>
                <button type="button" onClick={this.handleClick}>
                Click Me!
                </button>
            </div>
            </>
        )
    }


}

export default ClickMe