/*eslint-env node*/
const BASE_URL = `${process.env.BASE_URL}`

// Blogs
export const API_BLOGS = {
  LIST: `${BASE_URL}/posts`,
  DETAIL: (id) => `${BASE_URL}/posts/${id}`,
  CREATE: `${BASE_URL}/posts`,
  UPDATE: (id) => `${BASE_URL}/posts/${id}`,
  DELETE: (id) => `${BASE_URL}/posts/${id}`
}
