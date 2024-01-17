import axios from 'axios'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const WeatherDataContext = createContext()

export const useWeatherValue = () => {
	return useContext(WeatherDataContext)
}

export const WeatherDataProvider = ({ children }) => {
	const [weather, setWeather] = useState([])
	const [location, setLocation] = useState([])
	const [hours, getHours] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentCity, setCurrentCity] = useState('')
	const [currentUnit, setCurrentUnit] = useState('metric')

	useEffect(() => {
		async function getCity() {
			try {
				const { data } = await axios.get('http://ip-api.com/json/')
				setCurrentCity(data)
				getWeahterData(data.city, currentUnit)
				setLocation(data)
			} catch (error) {
				toast.error(error.message)
			}
		}
		getCity()
		getWeahterData()
	}, [currentUnit])

	async function getWeahterData(city) {
		const apiKey = 'UAZC4BXMKVMU56J6FYHXAHS9A'
		console.log(city)
		try {
			setLoading(true)
			const { data } = await axios.get(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`,
				{
					timeout: 10000,
				}
			)
			setWeather(data)
			getHours(data.days[0].hours)
		} catch (error) {
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}

	const contextValue = {
		weather,
		currentCity,
		loading,
		currentUnit,
		setCurrentUnit,
		hours,
		setCurrentCity,
		location,
	}

	return (
		<WeatherDataContext.Provider value={contextValue}>
			{children}
		</WeatherDataContext.Provider>
	)
}

WeatherDataProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
