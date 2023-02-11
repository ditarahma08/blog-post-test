import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { Container, Button, Navbar } from 'react-bootstrap'

const HeaderComponent = () => {
  const [ pathName, setPathname ] = useState('')
  useEffect(() => setPathname(window.location.pathname), [])

  return (
    <div className={styles['header-wrapper']}>
      <Navbar bg="light" className={`fixed-top navbar-light ${styles['navbar-section']}`}>
        <Container>
          <Link href='/'>
            <h4 className={`mb-0 ${styles['title-header']}`}>otoklix Blogs</h4>
          </Link>
          {
            pathName === '/' && (
              <Link href='/blog/create'>
                <Button className='btn btn-header'>Create Blog</Button>
              </Link>
            )
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderComponent
