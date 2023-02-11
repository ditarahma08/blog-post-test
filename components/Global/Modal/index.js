import { Modal, Button } from 'react-bootstrap'

const ModalAttention = ({ handleModal, show, handleDelete, isLoading }) => (
  <Modal show={show} onHide={handleModal} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        Delete blog
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='text-center my-5'>
      Are you sure to want delete this blog?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModal}>
        Back
      </Button>
      <Button variant="primary" disabled={isLoading} onClick={handleDelete}>
        {isLoading ? 'Loading ...' : 'Delete'}
      </Button>
    </Modal.Footer>
  </Modal>
)

export default ModalAttention
