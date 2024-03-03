

export const subscribeEmail = async (email: string): Promise<any> => {
    const response = await fetch('http://192.168.1.165:8000/subscribe-email/', {
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