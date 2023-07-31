import { AxiosError } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { signin } from "../apis/auth";
import LoginContext from "../contexts/LoginContext";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const loginValue = useContext(LoginContext);

  const isValidate = (email: string, password: string) => {
    if (email.indexOf("@") === -1) {
      alert("이메일에 @가 없습니다");
      return false;
    }
    if (password.length < 8) {
      alert("비밀번호 길이가 8자리 미만입니다");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidate(email, password)) return;
    try {
      const data = await signin({ email, password });
      localStorage.setItem("accessToken", data.access_token);
      loginValue?.actions.handleIsLogin(true);
      alert("로그인 성공 Todo List 페이지로 이동합니다");
      navigate("/todo", { replace: true });
    } catch (e) {
      if (e instanceof AxiosError) alert(e.response?.data.message);
    }
  };

  useEffect(() => {
    if (email.indexOf("@") !== -1 && password.length >= 8) setDisabled(false);
    else setDisabled(true);
  }, [email, password]);

  return (
    <SigninWrapper>
      <SigninForm onSubmit={handleSubmit}>
        <div className="signin">로그인</div>
        <div className="content">
          <div className="title">이메일</div>
          <input
            data-testid="email-input"
            type="text"
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="content">
          <div className="title">비밀번호</div>
          <input
            data-testid="password-input"
            type="password"
            value={password}
            placeholder="8자 이상의 비밀번호를 입력해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="content submit">
          <button data-testid="signin-button" type="submit" disabled={disabled}>
            로그인
          </button>
        </div>
      </SigninForm>
    </SigninWrapper>
  );
};

const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SigninForm = styled.form`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 50px 80px;

  .signin {
    font-size: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .content {
    padding-bottom: 30px;
    .title {
      margin-bottom: 5px;
    }
    input {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      width: 300px;
    }
    &.submit {
      display: flex;
      justify-content: center;
      padding-bottom: 0;
      button {
        display: inline-block;
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
    }
  }
`;

export default Signin;
