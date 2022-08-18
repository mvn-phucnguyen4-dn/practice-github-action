export const loginAPI = async (tokenId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      {
        method: 'POST',
        body: JSON.stringify({
          tokenId: tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
