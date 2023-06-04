import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useAxios = () => {
  const instance = axios.create();
  const router = useRouter();

  instance.defaults.baseURL = process.env.PUBLIC_API_URL;

  useEffect(() => {
    if (typeof instance !== "undefined") {
      const token = localStorage.getItem("token");
      instance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = token;
          return config;
        },
        (error) => {
          toast.error("Хүсэлт явуулахад алдаа гарлаа!");
          Promise.reject(error);
        }
      );

      instance.interceptors.response.use(
        (response) => response,
        (error) => {
          const { status } = error.response;
          if (["/login", "/register"].includes(router.pathname))
            switch (status) {
              case 401:
                if (router.pathname !== "/login")
                  toast.error("Нэвтрээгүй байна!");
                break;
              case 403:
                toast.error("Эрх хүрэлцэхгүй байна!");
                break;
              case 400:
              case 404:
                toast.error("Хүсэлт алдаатай байна!");
                break;
              case 500:
                toast.error("Сервер дээр алдаа гарлаа!");
                break;
              default:
                toast.error("Алдаа гарлаа!");
            }
          return Promise.reject(error);
        }
      );
    }
  }, []);

  return instance;
};
