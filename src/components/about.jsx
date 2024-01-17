import { Fragment } from 'react'
import cloud from '../assets/cloud.png'
import navigationTop from '../assets/hourly/navigationTop.png'
import Sunny from '../assets/hourly/sunsun.png'
import { useWeatherValue } from '../context/weatherData'

const About = () => {
	const { weather, hours } = useWeatherValue()
	return (
		<Fragment>
			<div className='p-6 flex flex-col xl:flex-row items-center xl:justify-between gap-4'>
				<div className='w-[350px] h-[430px] overflow-y-scroll lg:w-[414px] p-6  bg-[#D9D9D9] dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-800 dark:to-transparent text-center rounded-[30px] dark:border'>
					<h3 className='text-[#292929] font-semibold font-Poppins text-[32px] dark:text-white'>
						15 Days Forecast:
					</h3>

					{weather?.days?.map((d, i) => (
						<div key={i} className='flex items-center justify-between '>
							<img
								src={
									weather?.currentConditions?.cloudcover > '50' ? cloud : Sunny
								}
								alt='icons'
							/>
							<h3 className='text-[24px] font-Poppins font-semibold dark:text-white'>
								{d.temp}°C
							</h3>
							<h5 className='text-[20px] font-Poppins font-semibold dark:text-white'>
								{d.datetime}
							</h5>
						</div>
					))}
				</div>

				<div className='max-w-[870px] h-[460px] lg:h-auto lg:w-[870px] overflow-x-scroll ld:overflow-y-scroll py-6  bg-[#D9D9D9] dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-800 dark:to-transparent text-center rounded-[30px] dark:border'>
					<h3 className='text-[#292929] font-semibold font-Poppins text-[32px] dark:text-white'>
						Hourly Forecast:
					</h3>
					<div className='flex w flex-wrap xl:flex-nowrap  xl:items-baseline xl:justify-between gap-6 px-[30px] xl:px-[60px] py-[16px]'>
						{hours.map((hour, i) => {
							return (
								<div
									key={i}
									className='w-[100px] xl:w-[180px] p-6 rounded-[40px] bg-gradient-to-tr from-orange-500 to-transparent'
								>
									<div className='flex flex-col justify-center items-center gap-4'>
										<h3 className='text-[18px]  lg:text-[24px] font-semibold font-Poppins dark:text-white'>
											{hour.datetime}
										</h3>
										<img
											className='w-[55px]'
											src={hour.cloudcover > '50' ? cloud : Sunny}
											alt='sunny'
										/>
										<h3 className='text-[20px] font-semibold font-Poppins dark:text-white'>
											{hour.temp}°C
										</h3>
										<img
											className='w-[55px]'
											src={navigationTop}
											alt='NavigationTop'
										/>
										<h3 className='text-[20px] font-semibold font-Poppins dark:text-white'>
											{hour.windspeed}km/h
										</h3>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default About
