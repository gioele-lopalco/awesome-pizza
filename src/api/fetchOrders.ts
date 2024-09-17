'use server'

export const fetchOrders = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const data = await response.json();
    console.log(data)
    return data.map((item: any) => ({
      id: item.id,
      pizza: `Pizza ${item.id}`,
      extra: `Extra ${item.id}`,
      contact: `Contact ${item.userId}`,
      userId: 1,
    }
  ));
  } catch (error) {
    console.error('Errore nel fetch degli ordini:', error);
    throw error;
  }
};
