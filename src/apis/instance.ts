import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const API_BASE_URL: string = "https://www.pre-onboarding-selection-task.shop";

const axiosApi = (url: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: url,
    timeout: 10000,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(response);
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      )
        return response.data;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
