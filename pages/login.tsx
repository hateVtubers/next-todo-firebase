import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../public/githubLogo.svg";
import googleLogo from "../public/googleLogo.svg";

const Login: NextPage = () => {
  return (
    <div className="bg-blue-zodiac-600 min-h-screen grid place-items-center">
      <main className="bg-bright-turquoise-500 p-3 text-blue-zodiac-500 rounded w-60">
        <h1 className="text-xl">Login with:</h1>
        <picture className="flex items-center justify-evenly mt-3">
          {[githubLogo, googleLogo].map((logo: any, index: number) => (
            <Link href="/" key={index}>
              <a>
                <Image src={logo} alt={"logos"} width={40} height={40} />
              </a>
            </Link>
          ))}
        </picture>
      </main>
    </div>
  );
};

export default Login;
