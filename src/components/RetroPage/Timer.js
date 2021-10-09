import React from 'react'
import clock from '../../assets/images/clock.svg'
import '../../assets/css/timer.css'

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {},
            seconds: 10
        };
        this.countUp = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "hour": hours,
            "min": minutes,
            "sec": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeVar = this.secondsToTime(this.state.seconds);
        this.setState({
            time: timeVar
        });
        setInterval(this.countUp, 1000);
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        if (seconds >= 0) {
            this.setState({
                time: this.secondsToTime(seconds),
                seconds: seconds,
            });
        }
    }

    render() {
        return ( <div className="timer">
            <div>
                < img src = { clock }
                    alt = "clock" />
            </div>
            <div>
                { " " }
                {this.state.time.hour < 10 ? ("0" + this.state.time.hour) : this.state.time.hour} 
                { " : " }
                {this.state.time.min < 10 ? ("0" + this.state.time.min) : this.state.time.min}
                { " : " }
                {this.state.time.sec < 10 ? ("0" + this.state.time.sec) : this.state.time.sec}
             </div>
             </div>
        );
    }
}
