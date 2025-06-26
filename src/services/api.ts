export async function fetchData (url: string, body: any): Promise<any> {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })


}