import { mockCatalogs } from "@/constants/MockedData";

const mockCatalogsResponse = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: mockCatalogs });
  }, 1500);
});

const mockCatalogBySlugResponse = (slug: string) =>
  new Promise((resolve) => {
    const catalog = mockCatalogs.find((catalog) => catalog.slug === slug);
    setTimeout(() => {
      resolve({ data: catalog });
    }, 500);
  });

export default {
  getCatalogs() {
    return mockCatalogsResponse;
  },

  getCatalogBySlug(slug: string) {
    return mockCatalogBySlugResponse(slug);
  },
};
