import dayjs from 'dayjs'
import styles from './Card.module.scss'
import Link from 'next/link'
import { Row, Col, Card, Image } from 'react-bootstrap'

const CardList = ({ listBlogs }) => (
  <Row>
    <Col sm={12}>
      <Link href={`/blog/${listBlogs.id}`}>
        <div className={styles['card-wrapper']}>
          <Card className={styles['section-card']}>
            <Image
              src={listBlogs.img}
              className={styles['image-dummy']}
              alt="dummy-image"
            />
            <Card.Body className="px-0">
              <Card.Title className="truncate-2-line">
                {listBlogs.title}
              </Card.Title>
              <small>
                {dayjs(listBlogs.created_at).format('DD MMM YYYY') || '-'}
              </small>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </Col>
  </Row>
)

export default CardList
