import { useState } from 'react'
import Modal from 'react-responsive-modal'
import MainIcon from '../../../public/icons/ic_main_logo_alt.svg'
import Button from '../../components/button/button'
import TextField from '../../components/text-field/text-field'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

const WANT_TO_WORK_DEFAULT_FORM_DATE = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export const RegisterFormWantToWork = () => {
	const { setLoginState, setRegisterStep, registerStep } = AccessDataSource.setState()
	const [formData, setFormData] = useState(WANT_TO_WORK_DEFAULT_FORM_DATE)

	const toLogin = () => {
		setRegisterStep(null)
		setLoginState(true)
	}

	const handleChange = (fieldName, value) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[fieldName]: value
		}))
	}

	const onSubmit = () => {}

	return (
		<Modal
			open={AccessDataSource.REGISTER_STEPS_ENUM.isStepOne(registerStep)}
			onClose={() => setRegisterStep(null)}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<form onSubmit={onSubmit} className={styles.content}>
				<img src={MainIcon} className={styles.image} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<p>Ingresa tus datos y comienza a optimizar tu tiempo</p>
				<div className={styles.content_inputs}>
					<TextField label="Nombre" name="name" type="text" value={formData.name} onChange={e => handleChange('name', e.target.value)} />
					<TextField label="Apellido" name="lastName" type="text" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} />
					<TextField label="Correo electrónico" name="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} />
					<TextField label="Contraseña" name="password" type="password" value={formData.password} onChange={e => handleChange('password', e.target.value)} />
					<div className={styles.legend_password}>
						<span>Recuerda que tu contraseña debe contener:</span>
						<div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>6 - 12 caracteres</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Letras</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Números</span>
							</div>
						</div>
					</div>
					<TextField label="Confirma contraseña" name="confirmPassword" type="password" onChange={e => handleChange('confirmPassword', e.target.value)} />
					<div className={styles.legend_password_box}>
						<div className={styles.validate_sign}></div>
						<span>Vuelve a escribir la contraseña como está en el campo anterior</span>
					</div>
					<Button type="submit">Crear Cuenta</Button>
				</div>
				<div onClick={toLogin} className={styles.footer_login_redirect}>
					<span>¿Ya tienes una cuenta? </span>
					<a> Iniciar sesión</a>
				</div>
			</form>
		</Modal>
	)
}
