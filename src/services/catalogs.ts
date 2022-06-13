import { mockCatalogBySlugResponse, mockCatalogsResponse } from "@/constants/MockedData";

export default {
  getCatalogs() {
    return mockCatalogsResponse();
  },

  getCatalogBySlug(slug: string) {
    return mockCatalogBySlugResponse(slug);
  },
};
