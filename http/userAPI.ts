import { $authHost, $host } from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (
  nickname: string,
  email: string,
  password: string
) => {
  const { data } = await $host.post("api/user/signup", {
    nickname,
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/signin", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  return jwtDecode(data.token);
};