import { useState } from "react";
import useApi from "../../../api/useApi";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import * as S from "./Login.styles";

const Login = () => {
  const { loginWithEmail } = useApi();

  const handleLogin = () => {
    setLoading(true);
    try {
      loginWithEmail(email, password);
    } catch (error) {
      // TODO: toast on error
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginForm>
          <Input
            width="100%"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <Input
            width="100%"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button disabled={loading} onClick={handleLogin}>
            Login
          </Button>
        </S.LoginForm>
        <S.NotRegistered>
          Don&#39;t have an account?{" "}
          <S.NotRegisteredLink to="/auth/register">Create an account.</S.NotRegisteredLink>
        </S.NotRegistered>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
