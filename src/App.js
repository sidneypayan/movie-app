import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Movies from './components/Movies'

import { MoviesContextProvider } from './context/MoviesContext'

function App() {
	return (
		<MoviesContextProvider>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Movies />}>
							<Route path='films-a-voir' element={<Movies />}></Route>
							<Route path='films-vus' element={<Movies />}></Route>
						</Route>
					</Routes>
				</main>
			</Router>
		</MoviesContextProvider>
	)
}

export default App
