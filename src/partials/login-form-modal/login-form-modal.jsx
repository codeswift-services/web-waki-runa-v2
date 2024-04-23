import Modal from 'react-responsive-modal'
import MainIcon from '../../../public/icons/ic_main_logo_alt.svg'
import Button from '../../components/button/button'
import TextField from '../../components/text-field/text-field'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

export const LoginFormModal = () => {
	const { loginStep, setLoginStep, setRegisterMode } = AccessDataSource.setState()

	const onSubmit = () => {}

	const toLoginEmployee = () => {
		setLoginStep(null)
		setRegisterMode(AccessDataSource.REGISTER_MODE_ENUM.LOOKING_PERSONNEL)
	}

	const toRegister = () => {
		setLoginStep(null)
		setRegisterMode(true)
	}

	return (
		<Modal
			onClose={() => setLoginStep(null)}
			center
			open={AccessDataSource.LOGIN_STEPS_ENUM.isStepOne(loginStep)}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<form onSubmit={onSubmit} className={styles.content}>
				<img src={MainIcon} alt="wakyruna" />
				<h2>Inicia sesión como candidato</h2>
				<div className={styles.content_inputs}>
					<TextField label="Correo electrónico" type="email" name="email" />
					<TextField label="Contraseña" type="password" name="password" />
					<span>¿Olvidaste tu contraseña?</span>
					<Button type="submit">Iniciar Sesión</Button>
				</div>
				<div onClick={toRegister} className={styles.footer_register_redirect}>
					<span>¿Aún no tienes una cuenta?</span>
					<a>Regístrate aqui</a>
				</div>
				<div onClick={toLoginEmployee} className={styles.footer_register_redirect}>
					<span> Inicia sesión como empresa</span>
					<a> aquí </a>
				</div>
			</form>
		</Modal>
	)
}
