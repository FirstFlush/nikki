

export const subscribeEmail = async (email: string): Promise<any> => {
    // const response = await fetch('https://nikkiracing.com/api/subscribe/', {
    const response = await fetch('api/subscribe/', {
    // const response = await fetch('http://192.168.1.165:8000/api/subscribe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    });
    if (!response.ok) {
        console.log(response)
        throw new Error('Failed to subscribe');
      }
    return response.json();
}