import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/news" element={<News />} />
				<Route path="/events" element={<Events />} />
				<Route path="/news/:id" element={<News />} />
				<Route path="/events/:id" element={<Navbar />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;