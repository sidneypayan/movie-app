import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import FilmsAVoir from './components/FilmsAVoir'
import FilmsVus from './components/FilmsVus'

import { MoviesContextProvider } from './context/moviesContext'

function App() {
	return (
		<MoviesContextProvider>
			<Router>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/films-a-voir' element={<FilmsAVoir />}></Route>
						<Route path='/films-vus' element={<FilmsVus />}></Route>
					</Routes>
				</main>
			</Router>
		</MoviesContextProvider>
	)
}

export default App
