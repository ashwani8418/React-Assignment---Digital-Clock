import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={ time:new Date(),};
        this.intervalId=null;
    }
    render() {

        return ( 
        <div className="Clock">
            <h3 id ="time">{this.getTimeString()} </h3> 
        </div >
        );
    }
    componentDidMount(){
        this.intervalId = setInterval(() =>  {
            this.setState({
                time : new Date()
            })
        }, 1*1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    getTimeString() {
        const currTime = this.state.time;
        const [hours, minutes, seconds] = [currTime.getHours(), currTime.getMinutes(), currTime.getSeconds(),];

        const AmorPm = hours >= 12 ? "PM" : "AM";
        const twelveHrFormat = hours > 12 ? hours - 12 : hours;

        const hourString = '0'+ twelveHrFormat;
        const minString = this.padNumbertoTwoDigit(minutes);
        const secString = this.padNumbertoTwoDigit(seconds);

        var timeString = `${hourString}:${minString}:${secString} ${AmorPm}`;
        //var n=toLocaleTimeString();
        return timeString;
    }
    
    padNumbertoTwoDigit(num) {
        return `${num <10 ? "0" : ""}${num}`;
    }
}

export default App;