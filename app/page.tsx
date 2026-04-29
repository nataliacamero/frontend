import { getHomePage } from "@/lib/strapi";

export default async function Home() {
  const strapiData = await getHomePage();
  console.log("strapiData: ", strapiData);


  const { title, description } = strapiData;
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </main>
  );
}
