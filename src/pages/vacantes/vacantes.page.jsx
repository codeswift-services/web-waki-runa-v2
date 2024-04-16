import icGraphPerson from '../../../public/icons/ic_graph_person.svg'
import BodyContent from '../../components/body-content/body-content'
import Button from '../../components/button/button'
import ScrollIcon from '../../components/scroll-icon/scroll-icon'
import BaseTableFilter from '../../components/table-filter/base-table-filter'
import Table from '../../components/table/table'
import styles from './index.module.css'

export const VacantesPage = () => {
	let Head = () => {
		return (
			<tr>
				<th>Nombre</th>
				<th>Sector</th>
				<th>Regíon</th>
				<th>Salario</th>
				<th>Años exp.</th>
				<th></th>
			</tr>
		)
	}

	let Body = () => {
		return (
			<tr>
				<td>Contador</td>
				<td>Minero</td>
				<td>san miguel</td>
				<td>1700</td>
				<td>7</td>
				<td>
					<div style={{ display: 'flex', gap: '20px' }}>
						<Button mini variant="secondary">
							Postular
						</Button>
						<a>Compartir</a>
					</div>
				</td>
			</tr>
		)
	}
	return (
		<BodyContent>
			<div className={styles.background_main_section}>
				<div className={`${styles.limit_area} ${styles.main_section}`}>
					<h1>¿Estás listo para asumir una posición Especializada en tu carrera?</h1>
					<img src={icGraphPerson} alt="" />
				</div>
			</div>
			<div className={styles.vacantes_body}>
				<ScrollIcon />
				<h2 className={styles.title}>Buscar vacantes disponibles</h2>
				<div className={styles.table}>
					<BaseTableFilter />
					<Table>
						<Head />
						<Body />
					</Table>
				</div>
			</div>
		</BodyContent>
	)
}
