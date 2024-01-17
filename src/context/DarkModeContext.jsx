import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
	return useContext(DarkModeContext)
}

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}

	const contextValue = {
		isDarkMode,
		toggleDarkMode,
	}

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	)
}

DarkModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
