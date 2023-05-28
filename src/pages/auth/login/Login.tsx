import Button from "../../../components/atoms/Button/Button";
import * as S from "./Login.styles";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>Login</S.LoginTitle> 
        <S.LoginForm>
          <S.LoginInput placeholder="Email" />
          <S.LoginInput placeholder="Password" />
          <Button>Login</Button>
        </S.LoginForm>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
