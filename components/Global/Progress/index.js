import styles from './Progress.module.scss'
import { Spinner } from 'react-bootstrap'

const Progress = () => (
  <div className={styles['spinner-wrapper']}>
    <div className={styles['section-spinner']}>
      <Spinner
        className='d-block m-auto text-white mb-3'
        animation="border"
        role="status"
      />
      <span className={styles['loading-text']}>
        Loading...
      </span>
    </div>
  </div>
)

export default Progress
