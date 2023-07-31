import React, { useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const loginValue = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    loginValue?.actions.handleIsLogin(false);
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };

  return loginValue?.state.isLogin ? (
    <MyHeader>
      <div className="btn-wrapper">
        <button onClick={() => navigate("/")}>홈</button>
        <button onClick={handleSignout}>로그아웃</button>
      </div>
    </MyHeader>
  ) : null;
};

const MyHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .btn-wrapper {
    display: flex;
    padding: 30px 100px 0 0;
    gap: 10px;
    justify-content: flex-end;
  }

  button {
    display: inline-block;
    word-break: keep-all;
    background-color: white;
    outline: none;
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: lightgray;
    }
  }
`;

export default Header;
