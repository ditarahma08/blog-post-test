import { Toast, ToastContainer } from 'react-bootstrap'
import styles from './Toast.module.scss'

const ToastMessage = ({ show, messageToast, color }) => (
  <ToastContainer className={styles['wrapper-toast']} position='top-end'>
    <Toast show={show} delay={3000} bg={color} autohide>
      <Toast.Header>
        <strong className="me-auto">
          Attention
        </strong>
      </Toast.Header>
      <Toast.Body className='text-white'>
        {messageToast}
      </Toast.Body>
    </Toast>
  </ToastContainer>
)

export default ToastMessage
