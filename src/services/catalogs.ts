import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  getCatalogs() {
    return axios.get("catalogs").then(({ data }) => data);
  },

  getCatalogBySlug(slug: string) {
    return axios.get(`catalogs/${slug}`).then(({ data }) => data);
  },
};
