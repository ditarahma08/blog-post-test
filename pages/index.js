import React from 'react'
import Layout from '~/layouts/default'
import Blogs from '~/components/Page/Blogs'
import { apiGetNonAuth } from '~/utils/api'
import { API_BLOGS } from '~/utils/api-url'
import { PREFIX_IMAGE } from '~/utils/constant'

const Home = (listBlogs) => {
  return (
    <>
      <Layout
        meta_title='Blog Otoklix | Home'
        meta_description='Blog Otoklix Test'
      >
        <Blogs listBlogs={listBlogs.value} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  let res = {}
  let addImage = []
  try {
    res = await apiGetNonAuth(API_BLOGS.LIST)
    addImage = res.status !== 200 ? [] : res.data.map(item => (
      {
        ...item,
        img: `${PREFIX_IMAGE}/dummyimage.jpg`
      }
    ))
  } catch (err) {
    addImage = []
  }

  return {
    props: {
      value: addImage
    }
  }
}

export default Home
