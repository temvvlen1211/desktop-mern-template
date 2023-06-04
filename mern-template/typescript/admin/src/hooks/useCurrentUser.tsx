import { currentUserState } from "@temkanibno/utils/atoms";
import { IUser } from "@temkanibno/utils/interfaces";
import { useRecoilValue } from "recoil";

export const useCurrentUser = () => {
  const currentUser: IUser | undefined = useRecoilValue(currentUserState);
  return { currentUser };
};
