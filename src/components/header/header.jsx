import { useState } from 'react'
import { Link } from 'react-router-dom'
import MainLogo from '../../../public/icons/ic_main_logo.svg'
import AccessDataSource from '../../datasource/auth/access-store'
import Button from '../button/button'
import styles from './header.module.css'

export default function Header({ links = [], hasBackground = true, showActionBtn = true }) {
	const [show, setShow] = useState(true)
	const { setLoginState } = AccessDataSource.setState()

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<Link to="/">
				<img src={MainLogo} alt="wakiruna" />
			</Link>
			<div className={`${styles.header_links} ${show && styles.isActive}`}>
				{links.map((link, index) => (
					<a href={link.path} className={`${styles.link}`} key={index}>
						{link.name}
					</a>
				))}
				{showActionBtn && (
					<Button onClick={() => setLoginState(true)} w={'100px'}>
						Acceder
					</Button>
				)}
			</div>
		</div>
	)
}
