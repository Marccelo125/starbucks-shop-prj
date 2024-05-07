export async function requestApi(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error to get data from API');
    }
    return await response.json();
}