import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, ErrorPage, SingleMoviePage } from './pages'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<ErrorPage />} />
				<Route path='movies/:id' element={<SingleMoviePage />} />
			</Routes>
		</Router>
	)
}

export default App
