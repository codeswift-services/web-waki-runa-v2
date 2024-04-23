import 'react-responsive-modal/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about/about.page'
import { BlogPage } from './pages/blog/blog.page'
import { IndexPage } from './pages/index/index.page'
import { VacantesPage } from './pages/vacantes/vacantes.page'
import { LoginFormModal } from './partials/login-form-modal/login-form-modal'
import { LoginModal } from './partials/login-modal/login-modal'
import { RegisterFormWantToWork } from './partials/register-form-want-to-work/register-form-want-to-work'
import { RegisterLookingPersonnelModal } from './partials/register-looking-personnel-modal/register-looking-personnel-modal'
import { RegisterModesModal } from './partials/register-modes-modal/register-modes-modal'
import { RegisterWantToWork } from './partials/register-want-to-work/register-want-to-work'

function App() {
	return (
		<>
			<LoginModal />
			<LoginFormModal />
			<RegisterModesModal />
			<RegisterWantToWork />
			<RegisterFormWantToWork />
			<RegisterLookingPersonnelModal />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/vacantes" element={<VacantesPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
