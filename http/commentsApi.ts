import { $authHost, $host } from "./index";
import jwtDecode from "jwt-decode";

// export const createNews = async (formData: FormData) => {
//     const { data } = await $authHost.post("api/news", formData);
//     return data;
// };
export const getAllComments = async (id: any) => {
  const { data } = await $host.get(`api/comment/getallcomments/${id}`);
  return data;
};
// export const getUserNews = async (id: any) => {
//     const { data } = await $host.get(`api/news/selected/${id}`);
//     return data;
// };
// export const getSelectedPost = async (id: any) => {
//     const { data } = await $host.get(`api/news/${id}`);
//     return data;
// };
