const BASE_URL = "http://localhost:1337";


// With this function we can avoid writting fetch in every component. 
// We just need to import this function and call it with the url of the data we want to fetch.
export async function getStrapiData(url: string) {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;    
    }
}

getStrapiData('/api/home-page');