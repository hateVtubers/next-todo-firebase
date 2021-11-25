import type { User, UserData } from "../interfaces/UserData";
import { signInWithPopup, AuthProvider, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../firebase.config";

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false) as [boolean, Function];
  const [userData, setUserData] = useState(null) as [null | UserData, Function];
  const router = useRouter();
  const singIn: Function = (provider: AuthProvider): void => {
    signInWithPopup(auth, provider)
      .then((r) => {
        window.localStorage.setItem("login", "true");
        setIsLogin(true);
      })
      .catch((e) => {
        window.localStorage.setItem("login", "false");
        setIsLogin(false);
      });
  };

  const redirect: Function = (): void => {
    isLogin || JSON.parse(window.localStorage.getItem("login") as string)
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
