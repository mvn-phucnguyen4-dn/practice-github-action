export const getDataApi = async (url, token) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
    method: 'GET',
    body: null,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}
