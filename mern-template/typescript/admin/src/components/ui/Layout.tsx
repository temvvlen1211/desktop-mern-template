import { useCurrentUser } from "@temkanibno/hooks/useCurrentUser";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const { currentUser } = useCurrentUser();
  const router = useRouter();
  console.log("current user", currentUser);
  if (currentUser) {
    router.push({ pathname: "/" });
  }
  return <>{children}</>;
};

export default Layout;
