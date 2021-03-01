//create a button when clicked, a counter is displayed outside the button that increments by 1
import React, { Component } from 'react'

class ClickMe extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // handleClick = () => {
    //     console.log('a');

    //     fetch('http://localhost:3001/jobs')
    //         .then(resp => {
    //             console.log('b', resp);
    //             return resp.json();
    //         })
    //         .then(data => {
    //             console.log('c', data)
    //         })

    //     for(let i = 0; i < 5000; i++) {
    //         console.log('d');
    //     }

    // }

    render(){

        // var counter = 0;
        // let increment = document.getElementById("#count")


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