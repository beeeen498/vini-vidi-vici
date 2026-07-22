import siteConfig from "@/config/siteConfig";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: "Modern Italian cuisine crafted from fresh ingredients, bold flavors, and authentic recipes.",
    servesCuisine: "Italian",
    address: {
      "@type": "PostalAddress",
      streetAddress: "27 Via Roma",
      addressLocality: "Tel Aviv",
      addressCountry: "IL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "00:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;