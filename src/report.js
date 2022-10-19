
import 'bootstrap/dist/css/bootstrap.min.css';
import './report.css';
import { WiDaySunny } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { GiWhirlwind } from "react-icons/gi";
import { GiWindSlap } from "react-icons/gi";
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Report = (route) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    var utcSeconds= state.sys.sunrise;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    //const normalisedTime = new TimeRanges(var)
    return (
        <div className='container'>
            <h4 id="heading">React Weather App</h4>
            <div className='weather'>
                <h1>{state.main.temp}'F</h1>
                <h4>overcast cloudy</h4>
                <img src='https://freesvg.org/img/1489136024.png'id='cloud2' />
            </div>
            <div className='weathercity'>
                <h1> {state.name} </h1>
            </div>
            <div className='weather_info'>
                <h5 id='weather_info'>Weather Info ({new Date().toISOString().slice(0, 10)})</h5>
                <div className='weather_details'>
                    <div className='wheather1'>
                    <h4><WiDaySunny id='icon' className='sun' /> {d.getHours()+":"+d.getMinutes()} AM</h4>
                    <h4> <WiRaindrop id='icon' className='water'/> {state.main.humidity}%</h4>
                    </div>
                    <div className='wheather2'>
                        <h3><GiWhirlwind id="icon"/> {state.wind.deg}</h3>
                        <h3><GiWindSlap id='icons'className='wind' />{state.wind.speed} km</h3>
                    </div>
                </div>
            </div>  
            <div className='text-center pt-3'>
        <button className='btn btn-info' onClick={()=>navigate('/')}>Back</button>
        </div>     
        </div>
        
    )
}
export default Report
// var timestamp = Date. now(), // returns milliseconds since epoch time normalisedTime = new Date(timestamp);