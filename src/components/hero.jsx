import { Fragment } from 'react'
import HumidityDark from '../assets/1.png'
import Humidity from '../assets/1s.png'
import WindDark from '../assets/2.png'
import Wind from '../assets/2s.png'
import PressureDark from '../assets/3.png'
import Pressure from '../assets/3s.png'
import UVDark from '../assets/4.png'
import UV from '../assets/4s.png'
import cloud from '../assets/hourly/Cloudy.png'
import past from '../assets/pasttepa (1).png'
import tepa from '../assets/pasttepa (2).png'
import pastWhite from '../assets/pastwhite.png'
import sun from '../assets/sun.png'
import tepaWhite from '../assets/tepawhite.png'
import { useDarkMode } from '../context/DarkModeContext'
import { useNewData } from '../context/newData'
import { useWeatherValue } from '../context/weatherData'
const Hero = () => {
	const { isDarkMode } = useDarkMode()
	const { day, week1, months1, hour, minute, seconds } = useNewData()
	const { weather } = useWeatherValue()

	//

	////data////

	return (
		<Fragment>
			<div className='flex flex-col lg:flex-row items-center lg:justify-between p-1 lg:p-6  gap-3'>
				{/* clock */}
				<div className='w-[350px] lg:w-[508px]  bg-[#D9D9D9] dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-800 dark:to-transparent text-center rounded-[30px] dark:border'>
					<h3 className='text-[#292929] mt-[53px] mb-[29px] text-[36px] font-[700] dark:text-white'>
						{weather?.resolvedAddress}
					</h3>
					<h1 className='text-[#292929] text-[50px] lg:text-[96px] font-[700] dark:text-white'>
						{hour}:{minute}:{seconds}
					</h1>
					<p className='mb-[48px] text-[#292929d8] text-[20px] font-[700] dark:text-white'>
						{week1}, {day} {months1}
					</p>
				</div>
				{/* clock */}

				{/* inform */}
				<div className='flex flex-col gap-6  lg:flex-row items-center justify-between p-1 lg:p-4 max-w-[780px] bg-[#D9D9D9] dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-800 dark:to-transparent text-center rounded-[30px] overflow-hidden dark:border'>
					<div className='flex flex-col py-[25px]'>
						<h2 className='font-poppins text-7xl  font-bold  dark:text-slate-100'>
							{weather?.currentConditions?.temp}°
							{weather?.currentConditions?.temp < '0' ? '' : 'C'}
						</h2>
						<h5 className='text-[20px] font-semibold dark:text-white'>
							Feels like:{' '}
							<span className='pl-3 font-bold text-[32px]'>
								{weather?.currentConditions?.feelslike}°
								{weather?.currentConditions?.feelslike < '0' ? '' : 'C'}
							</span>
						</h5>
						<div className='flex flex-col mt-[40px] items-center gap-[10px]'>
							<div className='flex items-center gap-[10px]'>
								<img src={isDarkMode ? tepaWhite : tepa} alt='icons' />
								<div>
									<h5 className='text-[20px] font-semibold font-Poppins dark:text-white'>
										Sunrise
									</h5>
									<p className='text-[16px] font-semibold font-Poppins dark:text-white'>
										{weather?.currentConditions?.sunrise} AM
									</p>
								</div>
							</div>
							<div className='flex items-center gap-[10px]'>
								<img src={isDarkMode ? pastWhite : past} alt='icons' />
								<div>
									<h5 className='text-[20px] font-semibold font-Poppins dark:text-white'>
										Sunset
									</h5>
									<p className='text-[16px] font-semibold font-Poppins dark:text-white'>
										{weather?.currentConditions?.sunset} AM
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex flex-col '>
						<img
							src={weather?.currentConditions?.cloudcover > '50' ? cloud : sun}
							alt='sun'
						/>
						<h3 className='text-[32px]  -mt-6 font-semibold font-Poppins dark:text-white'>
							{weather?.currentConditions?.conditions}
						</h3>
					</div>

					<div className='flex flex-col gap-2'>
						<div className='flex items-baseline gap-[20px]'>
							<div className='flex flex-col gap-1'>
								<img src={isDarkMode ? HumidityDark : Humidity} alt='icons' />
								<h3 className='text-[#292929] text-[20px] font-semibold font-poppins dark:text-white'>
									{weather?.currentConditions?.humidity}%
								</h3>
								<p className='text-[#292929] text-[16px] font-semibold font-poppins dark:text-white'>
									Humidity
								</p>
							</div>

							<div className='flex flex-col gap-1'>
								<img
									src={isDarkMode ? WindDark : Wind}
									className='w-[60px] h-[59px]'
									alt='icons'
								/>
								<h3 className='text-[#292929] text-[20px] font-semibold font-poppins dark:text-white'>
									{weather?.currentConditions?.windspeed}km/h
								</h3>
								<p className='text-[#292929] text-[16px] font-semibold font-poppins dark:text-white'>
									Wind Speed
								</p>
							</div>
						</div>

						<div className='flex items-baseline gap-[20px]'>
							<div className='flex flex-col gap-1'>
								<img src={isDarkMode ? PressureDark : Pressure} alt='icons' />
								<h3 className='text-[#292929] text-[20px] font-semibold font-poppins dark:text-white'>
									{weather?.currentConditions?.pressure}
								</h3>
								<p className='text-[#292929] text-[16px] font-semibold font-poppins dark:text-white'>
									Pressure
								</p>
							</div>

							<div className='flex flex-col gap-1'>
								<img
									src={isDarkMode ? UVDark : UV}
									className='w-[60px] h-[59px]'
									alt='icons'
								/>
								<h3 className='text-[#292929] text-[20px] font-semibold font-poppins dark:text-white'>
									{weather?.currentConditions?.uvindex}
								</h3>
								<p className='text-[#292929] text-[16px] font-semibold font-poppins dark:text-white'>
									UV
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* inform */}
			</div>
		</Fragment>
	)
}

export default Hero
