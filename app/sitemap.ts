export default async function sitemap() {
  const baseUrl = "https://www.alphaherb.net";

  // Get dynamic product categories
  const categories = ["herbs", "flowers", "seeds"]; 

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/admin`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/our-farm`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/profile`, lastModified: new Date() },
    { url: `${baseUrl}/sign-in`, lastModified: new Date() },
    { url: `${baseUrl}/sign-up`, lastModified: new Date() },

    {
      url: `${baseUrl}/blog/mint-natures-refreshing-remedy-for-digestion-and-more`,
      lastModified: new Date(),
    },

    // Add dynamic product category URLs
    ...categories.map((category) => ({
      url: `${baseUrl}/products/${category}`,
      lastModified: new Date(),
    })),
  ];
}
