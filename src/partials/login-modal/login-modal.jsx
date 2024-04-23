import Modal from 'react-responsive-modal'
import IcEmail from '../../../public/icons/ic_email.svg'
import IcFacebook from '../../../public/icons/ic_facebook_circle.svg'
import IcGoogle from '../../../public/icons/ic_google.svg'
import MainIcon from '../../../public/icons/ic_main_logo_alt.svg'
import Button from '../../components/button/button'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

export const LoginModal = () => {
	const { loginState, setLoginState, setRegisterState, setLoginStep } = AccessDataSource.setState()

	const nextStep = () => {
		setLoginState(false)
		setLoginStep(AccessDataSource.LOGIN_STEPS_ENUM.STEP_ONE)
	}

	const toRegister = () => {
		setLoginState(false)
		setRegisterState(true)
	}

	return (
		<Modal
			open={loginState}
			center
			onClose={() => setLoginState(false)}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<img src={MainIcon} alt="wakyruna" />
				<h2>Iniciar sesión</h2>
				<div className={styles.content_buttons}>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<img alt="google-icon" src={IcGoogle} className={styles.google_image} />
							<span>Continuar con Google</span>
						</div>
					</Button>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<img src={IcFacebook} alt="facebook-icon" />
							<span>Continuar con Facebook</span>
						</div>
					</Button>
					<Button
						variant="ghost"
						onClick={() => {
							nextStep()
						}}
					>
						<div className={styles.login_btn}>
							<img src={IcEmail} alt="email" />
							<span>Continuar con email</span>
						</div>
					</Button>
				</div>
				<div onClick={toRegister} className={styles.footer_register_redirect}>
					<span>¿Aún no tienes una cuenta?</span>
					<a>Regístrate aquí</a>
				</div>
			</div>
		</Modal>
	)
}
