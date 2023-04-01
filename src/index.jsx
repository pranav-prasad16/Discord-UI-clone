import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
