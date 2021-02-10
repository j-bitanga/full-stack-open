  
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = ({capital}) => { 
    const [weather, setWeather] = useState('')
	const access_key = process.env.REACT_APP_API_KEY
	
	useEffect(()=> {
	  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${access_key}`)
	  .then(response=>{
		setWeather(response.data)
	})
},[])

if ( !weather ) {
	return (
		<div></div>
	)
}
	  return (
		  <div>
			  {console.log(weather)}
			  Temperature: {weather.main['temp']}<br></br>
			  Wind Speed: {weather.wind['speed']}
		  </div>
	  )
}

export default Weather