  
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = (props) => {
	const capital = props.capital.toLowerCase()
    const [weather, setWeather] = useState('')
	const access_key = '0d660f5a8b3ecfc824dc049f544d9cbe'
	
	useEffect(()=> {
	  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${access_key}`)
	  .then(response=>{
		setWeather(response.data)
	})
},[])
	
	  return (
		  <div>
			  Temperature: {weather.main['temp']}<br></br>
			  Wind Speed: {weather.wind['speed']}
		  </div>
	  )
}

export default Weather