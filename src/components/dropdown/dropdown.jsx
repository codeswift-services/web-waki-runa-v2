import icArrowDown from '../../../public/icons/ic_arrow_down.svg'

import { useState } from 'react'
import styles from './dropdown.module.css'

/**
 *
 * @param {string} title
 */

export default function DropDown({ title = '', children }) {
	const [focus, setFocus] = useState(false)

	return (
		<div className={styles.dropdown}>
			<div
				onClick={() => {
					setFocus(!focus)
				}}
			>
				<span>{title}</span>
				<img className={`${focus && styles.rotate}`} src={icArrowDown} alt="arrow" />
			</div>
			<p className={`${focus && styles.dropdown_body}`}>{children}</p>
		</div>
	)
}
