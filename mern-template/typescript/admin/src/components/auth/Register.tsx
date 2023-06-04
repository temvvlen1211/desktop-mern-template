import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { InputGroup } from "../ui/InputGroup";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ButtonLink } from "../ui/ButtonLink";
import { useCurrentUser } from "@temkanibno/hooks/useCurrentUser";
import { useAxios } from "@temkanibno/hooks/useAxios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const router = useRouter();
  const axios = useAxios();

  const { currentUser } = useCurrentUser();

  if (currentUser) {
    router.push({ pathname: "/" });
  }

  const submitRegister = () => {
    const body = { email, password, repassword };
    axios
      .post("/register", body)
      .then(() => {
        toast.success("Бүртгэл амжилттай");
        router.push({ pathname: "/login" });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Системд бүртгүүлэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitRegister();
              }}
            >
              <InputGroup
                label="И-Мэйл"
                placeholder="email@example.com"
                required={true}
                type="email"
                value={email}
                onChange={setEmail}
              />
              <InputGroup
                label="Нууц үг"
                placeholder="*********"
                required={true}
                type="password"
                value={password}
                onChange={setPassword}
              />
              <InputGroup
                label="Нууц үг давтах"
                placeholder="*********"
                required={true}
                type="password"
                value={repassword}
                onChange={setRepassword}
              />
              <Button type="submit">Бүртгүүлэх</Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлтэй хэрэглэгч?{" "}
                <Link href={"/login"}>
                  <ButtonLink>Нэвтрэх</ButtonLink>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
