export const postDataApi = async (url, body, token = '') => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}
