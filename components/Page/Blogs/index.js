import CardList from '~/components/Global/Card'
import styles from './Blogs.module.scss'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

const Blogs = ({ listBlogs }) => (
  <Container className='mt-5'>
    <Row>
      <Col sm={12} md={12} className='mb-5'>
        {
          listBlogs.length > 0 ? (
            listBlogs.slice(0, 1).map(item => (
              <Row key={Math.random()}>
                <Col sm={12} lg={5} className={styles['wrapper-image']}>
                  <Image
                    className={styles['img-banner']}
                    src={item.img}
                    alt='dummy-image-home'
                  />
                </Col>
                <Col sm={12} lg={7} className='mt-5 mt-lg-0 mt-xl-0 row'>
                  <div>
                    <h1 className='mb-3 text-bold'>{item.title}</h1>
                    <div className='truncate-3-line' dangerouslySetInnerHTML={{__html: item.content}} />
                  </div>
                  <div className='align-self-end mt-3'>
                    <small className='d-block mb-4'>{dayjs(item.created_at).format('DD MMM YYYY | mm:ss') || '-'} WIB</small>
                    <Link href={`/blog/${item.id}`}>
                      <Button variant="primary">Read Post</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            ))
          ) : (
            <b className='d-block text-center mt-5'>There is no data</b>
          )
        }
      </Col>
      <Col sm={12} md={12} className='mt-5 mb-3'>
        <h4>Blogger</h4>
      </Col>
      {
        listBlogs.length > 0 ? (
          listBlogs.map(item => (
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
  </Container>
)

export default Blogs
