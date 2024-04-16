import Facebook from '../../../public/icons/ic_facebook.svg'
import Instagram from '../../../public/icons/ic_instagram.svg'
import MainIcon from '../../../public/icons/ic_main_logo.svg'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<div className={styles.footer_container}>
			<div className={styles.icons_container}>
				<img src={MainIcon} alt="wakiruna" />
				<div className={styles.only_icons}>
					<img className={styles.icons} src={Facebook} alt="facebook" />
					<img className={styles.icons} src={Instagram} alt="instagram" style={{ marginLeft: '20px' }} />
				</div>
			</div>
			<p className={styles.copy_right}>
				&copy; 2023 Waki Runa. Todos los derechos reservados | Si tienes dudas escríbenos a <strong>contacto@wakiruna.pe</strong>
			</p>
		</div>
	)
}
