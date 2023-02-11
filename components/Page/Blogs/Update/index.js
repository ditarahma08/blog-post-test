import React from 'react'
import { useRouter } from 'next/router'
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'
import CKEditor from 'ckeditor4-react'
import styles from './Update.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UpdatePage = ({ dataDetail, isLoading, handleUpdate, target }) => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      title: dataDetail ? dataDetail.title : '',
      content: dataDetail ? dataDetail.content : ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      content: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!")
    }),
    onSubmit: values => handleUpdate(values)
  })

  const inputHandler = (event) => {
    formik.setFieldValue("content", event.editor.getData())
  }

  return (
    <Container className='mt-4'>
      <Row>
        <Col sm={12}>
          <h3 className='mb-3'>{target}</h3>
          <Card className={styles['card-wrapper']}>
            <Card.Body className='p-0'>
              <Form onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Col sm={12} className='mb-3'>
                    <Form.Label>*Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.title && formik.touched.title && (
                      <small className={styles['error-message']}>{formik.errors.title}</small>
                    )}
                  </Col>
                  <Col sm={12} className='mb-3'>
                    <Form.Label>*Content</Form.Label>
                    <CKEditor
                      name="content"
                      data={formik.values.content}
                      onChange={(e) => inputHandler(e)}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <small className={styles['error-message']}>{formik.errors.content}</small>
                    )}
                  </Col>
                </Row>
                <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                  <Button
                    variant="primary"
                    className='me-xs-0 me-sm-3'
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading ...' : 'Submit'}
                  </Button>

                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UpdatePage
