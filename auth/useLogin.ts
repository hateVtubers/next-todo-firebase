import { signInWithPopup, AuthProvider, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../firebase.config";
import type { User, UserData } from "../interfaces/UserData";

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false) as [boolean, Function];
  const [userData, setUserData] = useState(null) as [null | UserData, Function];
  const router = useRouter();
  const singIn: Function = (provider: AuthProvider): void => {
    signInWithPopup(auth, provider)
      .then((r) => {
        window.sessionStorage.setItem("login", "true");
        setIsLogin(true);
      })
      .catch((e) => {
        window.sessionStorage.setItem("login", "false");
        setIsLogin(false);
      });
  };

  const redirect: Function = (): void => {
    isLogin || JSON.parse(window.sessionStorage.getItem("login") as string)
      ? router.push("/")
      : router.push("/login");
  };
  const getUserData: Function = (): void => {
    onAuthStateChanged(auth, (user) => {
      const { displayName, photoURL, providerId } = user?.providerData[0] as User;
      setUserData({ displayName, photoURL, providerId });
    });
  };

  return {
    isLogin,
    userData,
    singIn,
    redirect,
    getUserData,
  };
};
