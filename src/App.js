import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ErrorPage, SingleMoviePage } from './pages'
import { Navbar } from './components'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path=':category' element={<HomePage />} />
				<Route path='movies/:id' element={<SingleMoviePage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Router>
	)
}

export default App
