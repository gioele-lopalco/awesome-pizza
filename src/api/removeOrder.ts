'use server'

export const removeOrder = async (id: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Errore nella rimozione dell\'ordine');
    }

    console.log(`Ordine con ID ${id} rimosso con successo`);
    return true
  } catch (error) {
    console.error(`Errore durante la rimozione dell'ordine con ID ${id}:`, error);
    throw error;
  }
};
