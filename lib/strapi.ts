import qs from "qs";

export const STRAPI_BASE_URL =
  process.env.STRAPI_BASE_URL || "http://localhost:1337";

const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
};

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  return response?.data;
}

// With this function we can avoid writting fetch in every component.
// We just need to import this function and call it with the url of the data we want to fetch.
export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data from Strapi: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
