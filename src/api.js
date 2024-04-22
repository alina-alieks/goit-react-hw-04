import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "3h13eI8G5eRNqDzhXDTqCm4t8gUB_oRFv59auvyxRTU";

export default async function apiRequest(value, currentPage) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: value,
      page: currentPage,
      per_page: 20,
      orientation: "landscape",
      lang: "en",
    },
  });
  return response.data.results;
}
