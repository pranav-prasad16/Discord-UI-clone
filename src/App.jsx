import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Dashboard from './pages/Dashboard'
import DashboardFriends from './pages/DashboardFriends'
import Channels from './pages/Channels'
import StageDiscovery from './pages/StageDiscovery'
import Nitro from './pages/Nitro'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/create-account' element={<CreateAccount />}></Route>
					{/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
					<Route path='/dashboard/' element={<DashboardFriends />}></Route>
					<Route path='/dashboard/stage-discovery' element={<StageDiscovery />}></Route>
					<Route path='/dashboard/nitro' element={<Nitro />}></Route>
					<Route path='/channel/:name' element={<Channels />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
