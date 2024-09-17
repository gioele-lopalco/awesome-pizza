'use server'

export const removeOrder = async (id: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Error removing the order')
    }

    console.log(`Order with ID ${id} removed successfully`)
    return true
  } catch (error) {
    console.error(`Error while removing the order with ID ${id}:`, error)
    throw error
  }
}
