import { HeroSection } from "@/components/hero-section";
import { getHomePage } from "@/lib/strapi";

export default async function Home() {
  const strapiData = await getHomePage();

  const { title, description } = strapiData;
  const [heroSection] = strapiData?.sections || [];
  console.log("heroSection: ", heroSection);
  return (
    <main className="container mx-auto py-6">
      <HeroSection data={heroSection} />
    </main>
  );
}
