import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { NewDataProvider } from './context/newData.jsx'
import { WeatherDataProvider } from './context/weatherData.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DarkModeProvider>
			<NewDataProvider>
				<WeatherDataProvider>
					<App />
				</WeatherDataProvider>
			</NewDataProvider>
		</DarkModeProvider>
	</React.StrictMode>
)
