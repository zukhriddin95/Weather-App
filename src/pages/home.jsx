// Home.js

import About from '../components/about'
import HeaderG from '../components/header'
import Hero from '../components/hero'
import Loading from '../components/loading'
import { useDarkMode } from '../context/DarkModeContext'
import { useWeatherValue } from '../context/weatherData'

const Home = () => {
	const { isDarkMode } = useDarkMode()
	const { loading } = useWeatherValue()

	return (
		<div className='container'>
			{loading ? (
				<Loading />
			) : (
				<div
					className={
						isDarkMode
							? 'pb-[80px] dark bg-gradient-to-bl from-gray-800 via-gray-800 to-transparent'
							: 'bg-gradient-to-r from-white via-transparent to-slate-800'
					}
				>
					<HeaderG />
					<Hero />
					<About />
				</div>
			)}
		</div>
	)
}

export default Home
