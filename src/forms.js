import axios from 'axios';
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './App.css';


const Formdata= () =>{

  const showAlert = (Msg) => {
    Swal.fire({
        title: Msg,
        text: "please enter valid citys",
        icon: "error",
        confirmButtonText: "OK",
      });
}
    const navigate = useNavigate()
    const [data1,setdata] = useState(false);
    const [error,setError] = useState('');
    const location=useRef(null)
    const getweather = async (event) => {
    event.preventDefault();
    api()
    event.target.reset();
    }
    const api=async()=>{
    // const datas = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${location.current.value}&appid=3dac18809122ac4fdbed0a62b370ae6c`,
    // ).catch(function(error){
    //   var msg=error.response.data.message;
    //   showAlert(msg)
    // });
    // setdata(datas.data);
    // const data1 = datas.data;
    // navigate('/report',{state:data1});
    const data2 = await axios.get('http://127.0.0.1:8000/cart-items/1');
    console.log(data2);
    }
    return(
        <div className='container'>
          <h4 id="heading">React Weather App</h4>
          <img src='https://freesvg.org/img/1489136024.png' id='cloud' />
          <h4 id="heading">Find Weather of your city</h4>
          <form onSubmit={getweather}>
            <input ref={location} id='location'></input>
            <button type="submit" class="btn">Search</button>         
          </form>
            
            
        </div>
    )
}

export default Formdata;