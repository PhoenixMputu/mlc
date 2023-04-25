import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import About from './pages/About'
import DetailsNew from './pages/DetailsNew'
import EventsDetails from './pages/EventsDetails'
import ForgetPassword from './pages/ForgetPassword'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import ListActivities from './pages/ListActivities';
import ListArticles from './pages/ListArticles';
import AddNew from './pages/AddNew';
import AddEvent from './pages/AddEvent'

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
				<Route path="/admin/forget" element={<ForgetPassword />} />
				<Route path="/admin/dashboard" element={<Dashboard />} />
				<Route path="/admin/event" element={<ListActivities />} />
				<Route path="/admin/news" element={<ListArticles />} />
				<Route path="/admin/addNew" element={<AddNew />} />
				<Route path="/admin/addEvent" element={<AddEvent />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;