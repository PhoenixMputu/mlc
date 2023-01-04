import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import About from './pages/About'
import DetailsNew from './pages/DetailsNew'
import EventsDetails from './pages/EventsDetails'
import Register from './pages/Register'
import Login from './pages/Login'

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
				<Route path="/admin" element={<Login />} />
				<Route path="/admin/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;