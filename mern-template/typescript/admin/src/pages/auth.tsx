import { Spinner } from "@temkanibno/components/Spinner";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Index() {
  const router = useRouter();
  const { isReady, query } = router;

  useEffect(() => {
    if (isReady) {
      localStorage.setItem("token", `${query.token}`);
      const redirectAfterLogin = localStorage.getItem("redirectAfterLogin");
      router.replace(redirectAfterLogin ?? "/");
      localStorage.removeItem("redirectAfterLogin");
    }
  }, [isReady]);

  return (
    <div className="mt-6">
      <Spinner />
    </div>
  );
}

export default Index;
