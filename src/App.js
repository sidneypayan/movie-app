import Header from './components/layout/Header'
import Filter from './components/layout/Filter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'

import { MoviesProvider } from './context/MoviesContext'

function App() {
	return (
		<MoviesProvider>
			<Router>
				<Header />
				<Filter />
				<main>
					<Routes>
						<Route path='/' element={<Home />}>
							<Route path='popular' element={<Home />} />
							<Route path='favorite' element={<Home />} />
							<Route path='watched' element={<Home />} />
							<Route path='now-playing' element={<Home />} />
							<Route path='upcoming' element={<Home />} />
							<Route path='top-rated' element={<Home />} />
						</Route>
					</Routes>
				</main>
			</Router>
		</MoviesProvider>
	)
}

export default App
