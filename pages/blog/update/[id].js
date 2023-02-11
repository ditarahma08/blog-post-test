import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '~/layouts/default'
import UpdateBlog from '~/components/Page/Blogs/Update'
import ToastMessage from '~/components/Global/Toast'
import { apiGetNonAuth, apiPutNonAuth } from '~/utils/api'
import { API_BLOGS } from '~/utils/api-url'

const UpdatePage = (dataDetail) => {
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [colorToast, setColorToast] = useState('')
  const router = useRouter()
  const handleUpdate = async (payload) => {
    setIsLoading(true)
    try {
      const res = await apiPutNonAuth(API_BLOGS.UPDATE(dataDetail.value.id), payload)
      setIsLoading(false)
      setToast(true)
      if (res.status == 200) {
        setMessageToast('Blog has been updated')
        setColorToast('success')
        router.push(`/blog/${dataDetail.value.id}`)
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
        meta_title='Blog Otoklix | Update Blog'
        meta_description='Blog Otoklix Test | Update'
      >
        <ToastMessage show={toast} messageToast={messageToast} color={colorToast} />
        <UpdateBlog
          target='Edit'
          dataDetail={dataDetail.value}
          isLoading={isLoading}
          handleUpdate={(payload) => handleUpdate(payload)}
        />

      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  let res = {}
  try {
    res = await apiGetNonAuth(API_BLOGS.DETAIL(context.params.id))
  } catch {
    res = null
  }
  return {
    props: {
      value: res ? res.data : null
    }
  }
}

export default UpdatePage
