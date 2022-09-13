import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    router(`/`);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Это страница Login</h1>
      <form autoComplete="off" onSubmit={login}>
        <p>
          <MyInput type="text" name="login" placeholder="Логин" />
        </p>
        <p>
          <MyInput type="password" name="password" placeholder="Пароль" />
        </p>

        <p>
          <MyButton type="submit">Войти</MyButton>
        </p>
      </form>
    </div>
  );
}

export default Login;
