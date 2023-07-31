// import { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  onlyAuth: boolean;
  children: React.ReactElement;
}

export const PrivateRoute = ({ onlyAuth, children }: Props) => {
  const accessToken = localStorage.getItem("accessToken");

  if (onlyAuth && !accessToken) {
    alert("로그인을 해야만 볼 수 있는 페이지입니다");
    return <Navigate to="/signin" replace={true} />;
  } else if (!onlyAuth && accessToken) {
    return <Navigate to="/todo" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
