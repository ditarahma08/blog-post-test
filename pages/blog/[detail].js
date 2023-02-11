import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '~/layouts/default'
import DetailBlog from '~/components/Page/Blogs/Detail'
import ToastMessage from '~/components/Global/Toast'
import { apiGetNonAuth, apiDeleteNonAuth } from '~/utils/api'
import { API_BLOGS } from '~/utils/api-url'
import { PREFIX_IMAGE } from '~/utils/constant'

const DetailPage = (dataBlog) => {
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [colorToast, setColorToast] = useState('')
  const router = useRouter()
  const handleDelete = async (target) => {
    setIsLoading(true)
    try {
      const res = await apiDeleteNonAuth(API_BLOGS.DELETE(target))
      setIsLoading(false)
      setToast(true)
      if (res.status == 200) {
        setMessageToast('Blog has been deleted')
        setColorToast('success')
        router.push(`/`)
      } else {
        setColorToast('danger')
        setMessageToast('Upps, Something went wrong')
      }
    } catch {
      setToast(true)
      setColorToast('danger')
      setMessageToast('Upps, Something went wrong')
      setIsLoading(false)
    }
  }
  return (
    <>
      <Layout
        meta_title='Blog Otoklix | Detail'
        meta_description='Blog Otoklix Test | Detail'
      >
        <ToastMessage show={toast} messageToast={messageToast} color={colorToast} />
        <DetailBlog
          dataDetail={dataBlog.value}
          dataList={dataBlog.valueList}
          handleDelete={(target) => handleDelete(target)}
          isLoading={isLoading}
        />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  let res = {}
  let resList = []
  let addImage = []

  try {
    res = await apiGetNonAuth(API_BLOGS.DETAIL(context.params.detail))
    resList = await apiGetNonAuth(API_BLOGS.LIST)
    addImage = resList.status !== 200 ? [] : resList.data.map(item => (
      {
        ...item,
        img: `${PREFIX_IMAGE}/dummyimage.jpg`
      }
    ))
  } catch (err) {
    res = {}
    addImage = []
  }

  return {
    props: {
      value: res.data ? { ...res.data, img: `${PREFIX_IMAGE}/dummyimage.jpg` } : null,
      valueList : addImage
    }
  }
}

export default DetailPage
