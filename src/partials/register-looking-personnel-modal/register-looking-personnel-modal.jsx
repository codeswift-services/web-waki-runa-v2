import { useState } from 'react'
import Modal from 'react-responsive-modal'
import MainIcon from '../../../public/icons/ic_main_logo_alt.svg'
import Button from '../../components/button/button'
import TextField from '../../components/text-field/text-field'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

const LOOKING_PERSONNEL_DEFAULT_FORM_DATE = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
	business: '',
	address: '',
	documentNumber: '',
	preferenceContact: 0
}

const PRF_PHONE_NUMBER = 1
const PRF_EMAIL = 0

export const RegisterLookingPersonnelModal = () => {
	const { setRegisterMode, registerMode } = AccessDataSource.setState()
	const [formData, setFormData] = useState(LOOKING_PERSONNEL_DEFAULT_FORM_DATE)

	const handleChange = (fieldName, value) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[fieldName]: value
		}))
	}

	return (
		<Modal
			onClose={() => setRegisterMode(null)}
			open={AccessDataSource.REGISTER_MODE_ENUM.isLookingPersonnel(registerMode)}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<img src={MainIcon} alt="wakyruna" />
				<h2>Busco personal para mi empresa</h2>
				<span>Ingresa los datos y te ayudaremos en lo que necesites</span>
				<div className={styles.content_inputs}>
					<TextField label="Nombre" />
					<TextField label="Apellidos" />
					<TextField label="Teléfono" />
					<TextField label="Correo electrónico" />
					<div className={styles.content_input_type_contact}>
						<span>Tipo de contacto preferido</span>
						<div className={styles.content_input_type_contact_checkbox}>
							<div>
								<input
									type="checkbox"
									checked={formData.preferenceContact === PRF_EMAIL}
									onClick={() => {}}
									onChange={() => {
										handleChange('preferenceContact', PRF_EMAIL)
									}}
								/>
								<label>Email</label>
							</div>
							<div>
								<input
									type="checkbox"
									checked={formData.preferenceContact === PRF_PHONE_NUMBER}
									onChange={() => {
										handleChange('preferenceContact', PRF_PHONE_NUMBER)
									}}
								/>
								<label>Teléfono</label>
							</div>
						</div>
					</div>
					<TextField label="Empresa" />
					<TextField label="Dirección" />
					<TextField label="N° RUC" />
				</div>
				<Button w="200px">Enviar</Button>
			</div>
		</Modal>
	)
}
