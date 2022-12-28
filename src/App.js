import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import About from './pages/About'
import DetailsNew from './pages/DetailsNew'
import EventsDetails from './pages/EventsDetails'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/news" element={<News />} />
				<Route path="/events" element={<Events />} />
				<Route path="/news/:id" element={<DetailsNew />} />
				<Route path="/events/:id" element={<EventsDetails />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;