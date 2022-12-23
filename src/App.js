import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/news" element={<News />} />
				<Route path="/events" element={<Events />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;