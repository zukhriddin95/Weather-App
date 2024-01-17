import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const NewDataContext = createContext()

export const useNewData = () => {
	return useContext(NewDataContext)
}

export const NewDataProvider = ({ children }) => {
	const [data, setData] = useState(new Date())

	///data////

	useEffect(() => {
		const intervalId = setInterval(() => {
			setData(new Date())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const week = [
		'Yakshanba',
		'Dushanba',
		'Seshanba',
		'Chorshanba',
		'Payshanba',
		'Juma',
		'Shanba',
	]
	const months = [
		'Yanvar',
		'Fevral',
		'Mart',
		'Aprel',
		'May',
		'Iyun',
		'Iyul',
		'Avgust',
		'Sentabr',
		'Oktabr',
		'Noyabr',
		'Dekabr',
	]

	const day = data.getDate()
	const week1 = week[data.getDay()]
	const months1 = months[data.getMonth()]

	const hour = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
	const minute =
		data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
	const seconds =
		data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()

	///data////

	const contextValue = { day, week1, months1, hour, minute, seconds }

	return (
		<NewDataContext.Provider value={contextValue}>
			{children}
		</NewDataContext.Provider>
	)
}

NewDataProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
