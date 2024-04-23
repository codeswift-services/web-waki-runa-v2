import Modal from 'react-responsive-modal'
import PcLookStaff from '../../../public/pictures/pc_look_staff.svg'
import PcNeedJob from '../../../public/pictures/pc_need_job.svg'
import AccessDataSource from '../../datasource/auth/access-store'
import styles from './index.module.css'

export const RegisterModesModal = () => {
	const { setRegisterState, setRegisterMode, registerState } = AccessDataSource.setState()

	const changeMode = value => {
		setRegisterState(false)
		/**
		 * set step one register form
		 */
		setRegisterMode(value)
		// setRegisterStep(AccessDataSource.REGISTER_STEPS_ENUM.STEP_ONE)
	}

	return (
		<Modal
			open={registerState}
			center
			onClose={() => setRegisterState(false)}
			classNames={{
				modal: styles.modal_content
			}}
			closeOnOverlayClick={false}
		>
			<div className={styles.content}>
				<h2>¡Comienza ahora!</h2>
				<p>
					<strong>Solicita los servicios que Waki Runa </strong>tiene para ti y escala en el mundo laboral
				</p>
				<div className={styles.register_card_option_layout}>
					<div onClick={() => changeMode(AccessDataSource.REGISTER_MODE_ENUM.WANT_TO_WORK)} className={styles.register_card_option}>
						<img src={PcNeedJob} alt="need_job" />
						<span>Quiero trabajar</span>
					</div>
					<div onClick={() => changeMode(AccessDataSource.REGISTER_MODE_ENUM.LOOKING_PERSONNEL)} className={styles.register_card_option}>
						<img src={PcLookStaff} alt="look_staff" />
						<span>Busco personal</span>
					</div>
				</div>
			</div>
		</Modal>
	)
}
