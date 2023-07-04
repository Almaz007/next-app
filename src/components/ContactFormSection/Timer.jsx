import React, { Component } from 'react';

class Timer extends Component{
    state = {
        date: new Date()
    };

    callMe(){
            setInterval(()=>{
                this.setState({date: new Date()});
            },1000);
        }
    render(){
        return (
            // {this.state.date.getHours() + ":" + this.state.date.getMinutes()}
            // {this.callMe()}
            <div className="top__time">
                <div className="time">
                    {this.state.date.toLocaleString().split(' ')[1].split(":")[0] +":"+ this.state.date.toLocaleString().split(' ')[1].split(":")[1]}
                    {this.callMe()}
                </div>
                <div className="gmt">
                    {/* {this.state.date.toTimeString().split(" ")[1]} */}
                    GMT+4
                </div>
            </div>
        );
    }
}

export default Timer;
