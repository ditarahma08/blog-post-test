import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '~/styles/globals.scss'
import Progress from '~/components/Global/Progress'

const MyApp = ({ Component, pageProps }) => {
  const [ isLoading, setIsLoading ] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setIsLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false)
  })

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Blog Otoklix</title>
      </Head>
      { isLoading && <Progress /> }
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default MyApp
