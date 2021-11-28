import { NextPage } from "next";
import Image from "next/image";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useLogin } from "../auth/useLogin";
import { useEffect } from "react";
import { HeaderIndex } from "../components/HeaderContainer";
import githubLogo from "../public/githubLogo.svg";
import googleLogo from "../public/googleLogo.svg";

const Login: NextPage = () => {
  const { isLogin, singIn, redirect } = useLogin();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    redirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const logos = [
    [googleLogo, googleProvider],
    [githubLogo, githubProvider],
  ];
  return (
    <>
      <HeaderIndex />
      <div className="bg-bright-turquoise-600 min-h-screen grid place-items-center transition-colors">
        <main className="bg-blue-zodiac-300 p-3 text-bright-turquoise-500 rounded w-60 transition-colors">
          <h1 className="text-xl">Login with:</h1>
          <picture className="flex items-center justify-evenly mt-3">
            {logos.map(([logo, provider], index: number) => (
              <Image
                src={logo}
                alt={"logos"}
                width={40}
                height={40}
                priority={true}
                className="cursor-pointer"
                onClick={() => {
                  singIn(provider);
                }}
                key={index}
              />
            ))}
          </picture>
        </main>
      </div>
    </>
  );
};

export default Login;
