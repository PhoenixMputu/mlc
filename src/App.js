import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/cart" element={<Navbar />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;