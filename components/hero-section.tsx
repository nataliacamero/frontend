import { STRAPI_BASE_URL } from "@/lib/strapi";
import Link from "next/link";

const styles = {
  header: "relative h-[600px] overflow-hidden",
  backgroundImage: "absolute inset-0 w-full h-full object-cover",
  overlay:
    "relative Z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50",
  heading: "text-4xl font-bold md:text-5xl lg:text-6xl",
  subheading: "mt-4 text-lg md:text-xl lg:text-2xl",
  button:
    "mt-8 inline-flex items-center justify-center px-6 py-3 text-lg  text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 transition-color",
};

export function HeroSection({
  data,
}: {
  readonly data: {
    heading: string;
    subheading: string;
    link: { href: string; label: string };
    image: { url: string; alternativeText: string };
  };
}) {
  if (!data) return null;

  const { heading, subheading, link } = data;

  const imageURL = data.image?.url.startsWith("http")
    ? data.image.url
    : `${STRAPI_BASE_URL}${data.image.url}`;

  return (
    <header className={styles.header}>
      <img
        alt="Background"
        className={styles.backgroundImage}
        height={1080}
        src={imageURL}
        style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        width={1920}
      />
      <div className={styles.overlay}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
        <Link href={link.href} className={styles.button}>
          {link.label}
        </Link>
      </div>
    </header>
  );
}
