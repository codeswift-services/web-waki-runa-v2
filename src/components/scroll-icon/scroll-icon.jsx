import icScroll from '../../../public/icons/ic_arrow_down.svg'
import styles from './scroll-icon.module.css'

export default function ScrollIcon({ label = 'Conoce más' }) {
	return (
		<div className={styles.scroll}>
			<span>
				<strong>{label}</strong>
			</span>
			<div>
				<img className="arrow" alt="arrow" src={icScroll} />
				<img className="arrow" alt="arrow" src={icScroll} />
			</div>
		</div>
	)
}
