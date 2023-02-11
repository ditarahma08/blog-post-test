import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '~/layouts/default'
import UpdateBlog from '~/components/Page/Blogs/Update'
import ToastMessage from '~/components/Global/Toast'
import { apiPostNonAuth } from '~/utils/api'
import { API_BLOGS } from '~/utils/api-url'

const UpdatePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState(false)
  const [messageToast, setMessageToast] = useState('')
  const [colorToast, setColorToast] = useState('')
  const router = useRouter()
  const handleUpdate = async (payload) => {
    setIsLoading(true)
    try {
      const res = await apiPostNonAuth(API_BLOGS.CREATE, payload)
      setIsLoading(false)
      setToast(true)
      if (res.status == 200) {
        setMessageToast('Blog has been created')
        setColorToast('success')
        router.push(`/blog/${res.data.id}`)
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
        meta_title='Blog Otoklix | Create Blog'
        meta_description='Blog Otoklix Test | Create Blog'
      >
        <ToastMessage show={toast} messageToast={messageToast} color={colorToast} />
        <UpdateBlog
          target='Create'
          isLoading={isLoading}
          handleUpdate={(payload) => handleUpdate(payload)}
        />
      </Layout>
    </>
  )
}

export default UpdatePage
