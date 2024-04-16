import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about/about.page'
import { BlogPage } from './pages/blog/blog.page'
import { IndexPage } from './pages/index/index.page'
import { VacantesPage } from './pages/vacantes/vacantes.page'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/vacantes" element={<VacantesPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
