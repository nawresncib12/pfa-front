import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import * as S from "./Login.styles";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginForm>
          <Input width="100%" placeholder="Email" />
          <Input width="100%" placeholder="Password" />
          <Button>Login</Button>
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
