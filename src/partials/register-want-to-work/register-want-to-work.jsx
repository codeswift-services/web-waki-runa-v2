import Modal from 'react-responsive-modal'
import IcEmail from '../../../public/icons/ic_email.svg'
import IcFacebook from '../../../public/icons/ic_facebook_circle.svg'
import IcGoogle from '../../../public/icons/ic_google.svg'
import MainIcon from '../../../public/icons/ic_main_logo_alt.svg'
import Button from '../../components/button/button'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

export const RegisterWantToWork = () => {
	const { setLoginState, setRegisterStep, setRegisterMode, registerMode } = AccessDataSource.setState()

	const toLogin = () => {
		setRegisterMode(null)
		setLoginState(true)
	}

	const nextStep = () => {
		setRegisterMode(null)
		setRegisterStep(AccessDataSource.REGISTER_STEPS_ENUM.STEP_ONE)
	}

	const handleGoogleSignIn = () => {}

	return (
		<Modal
			open={AccessDataSource.REGISTER_MODE_ENUM.isWantToWork(registerMode)}
			center
			onClose={() => setRegisterMode(null)}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<img src={MainIcon} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<div className={styles.content_btns}>
					<Button variant="ghost" onClick={nextStep}>
						<div className={styles.login_btn}>
							<img src={IcEmail} alt="email" />
							<span>Ingresa con correo</span>
						</div>
					</Button>
					<div className={styles.stepone_separator}>
						<hr />
						<span>o si gustas</span>
						<hr />
					</div>
					<Button onClick={handleGoogleSignIn} redirect="/home_person" variant="ghost">
						<div className={styles.login_btn}>
							<img src={IcGoogle} alt="google" className={styles.google_image} />
							<span>Ingresa con Google</span>
						</div>
					</Button>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<img src={IcFacebook} alt="facebook" />
							<span>Ingresa con Facebook</span>
						</div>
					</Button>
				</div>
				<div onClick={toLogin} className={styles.footer_login_redirect}>
					<span>¿Ya tienes una cuenta? </span>
					<a> Iniciar sesión</a>
				</div>
			</div>
		</Modal>
	)
}
