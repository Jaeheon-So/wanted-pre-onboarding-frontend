import { axiosInstance } from "./instance";

// 회원가입
export const signup = async (arg: SignupRequest) => {
  const data = await axiosInstance.post("/auth/signup", arg);
  return data;
};

// 로그인
export const signin = async (arg: SigninRequest) => {
  const data: SigninResponse = await axiosInstance.post("/auth/signin", arg);
  return data;
};
