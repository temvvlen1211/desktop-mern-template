import { FC, ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../utils/atoms";
import { useAxios } from "@temkanibno/hooks/useAxios";
import { useRouter } from "next/router";

interface CurrentUserProviderProps {
  children: ReactNode;
}
export const CurrentUserProvider: FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const setCurrentUser = useSetRecoilState(currentUserState);
  const axios = useAxios();
  console.log("axios:", axios.defaults.baseURL);

  useEffect(() => {
    axios
      .get("/currentUser")
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch(() => {
        setCurrentUser(undefined);
        router.push({ pathname: "/login" });
      });
  }, []);

  return <>{children}</>;
};
