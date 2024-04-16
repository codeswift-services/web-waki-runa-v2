import BackImage from '../../../public/icons/background.svg'
import Button from '../button/button'
import styles from './card-blog.module.css'

const CardBlog = ({ date, title, url }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<img src={BackImage} alt="wakyruna" />
				<p className={styles.date}>{date}</p>
				<p className={styles.title}>{title}</p>
			</div>
			<div className={styles.buttonContainer}>
				<Button url={url} />
			</div>
		</div>
	)
}

export default CardBlog
