import React, { useState } from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import ModalAttention from '~/components/Global/Modal'
import CardList from '~/components/Global/Card'
import styles from './Detail.module.scss'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

const DetailBlog = ({ dataDetail, dataList, handleDelete, isLoading }) => {
  const [show, setShow] = useState(false)
  const handleModal = () => setShow(!show)
  return (
    <>
      {
        dataDetail ? (
          <Container>
            <Row>
              <Col sm={12} className='mb-3 mb-lg-5 d-flex justify-content-end'>
                <Link href={`/blog/update/${dataDetail.id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
                <Button variant="danger" className='ms-3' onClick={handleModal}>Delete</Button>

                <ModalAttention
                  handleModal={handleModal}
                  handleDelete={() => handleDelete(dataDetail.id)}
                  show={show}
                  isLoading={isLoading}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={8} className='mx-auto my-3 my-lg-5'>
                <Image
                  className={styles['image-blogger']}
                  src={dataDetail.img}
                  alt='dummy-image-detail'
                />
                <small>{dayjs(dataDetail.created_at).format('DD MMM YYYY') || '-'}</small>
                <h2 className='mt-4'>{dataDetail.title}</h2>
                <div dangerouslySetInnerHTML={{__html: dataDetail.content}}></div>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col sm={12} className='my-5'>
                <b className='d-block text-center'>There is no data</b>
              </Col>
            </Row>
          </Container>
        )
      }

      <div className='bg-white mt-5'>
        <Container className='my-5 py-5'>
          <Row>
            <Col sm={12}>
              <h4 className='mb-3'>People also read</h4>
              <Row>
                {
                  dataList.length > 0 ? (
                    dataList.slice(0,3).map(item => (
                      <Col sm={12} md={6} lg={4} key={Math.random()}>
                        <CardList listBlogs={item} />
                      </Col>
                    ))
                  ) : (
                    <Col sm={12} className='my-5'>
                      <b className='d-block text-center'>There is no data</b>
                    </Col>
                  )
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default DetailBlog
