import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "../contexts/LoginContext";

const Main = () => {
  const loginValue = useContext(LoginContext);

  return (
    <Container>
      {loginValue?.state.isLogin ? (
        <Link to="/todo">Todo List</Link>
      ) : (
        <>
          <Link to="/signup">회원가입</Link>
          <Link to="/signin">로그인</Link>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  margin-top: 100px;

  a {
    padding: 100px;
    border-radius: 10px;
    background-color: #94c1e9;
  }
`;

export default Main;
