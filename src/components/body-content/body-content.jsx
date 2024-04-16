import Footer from '../footer/footer'
import Header from '../header/header'

const MOCK_LINKS = [
	{ name: 'Vacantes', path: '/vacantes' },
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' }
	// { name: 'Inicia Sesíon', path: '/signin' }
]

export default function BodyContent({ children, hasBackground = true }) {
	return (
		<>
			<Header hasBackground={hasBackground} links={MOCK_LINKS} />
			{children}
			<Footer />
		</>
	)
}
