import React, { useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type LoginContextValueType = {
  state: { isLogin: boolean };
  actions: {
    handleIsLogin: (status: boolean) => void;
  };
};

const LoginContext = React.createContext<LoginContextValueType | null>(null);

// 간단한 버킷리스트 App
export const LoginProvider = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const handleIsLogin = (status: boolean) => {
    setIsLogin(status);
  };

  const value: LoginContextValueType = {
    state: { isLogin },
    actions: {
      handleIsLogin,
    },
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;
