import Header from './components/layout/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'

import { MoviesProvider } from './context/MoviesContext'

function App() {
	return (
		<MoviesProvider>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />}>
							<Route path='favorite' element={<Home />} />
							<Route path='watched' element={<Home />} />
						</Route>
					</Routes>
				</main>
			</Router>
		</MoviesProvider>
	)
}

export default App
