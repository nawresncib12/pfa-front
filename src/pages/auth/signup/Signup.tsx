import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import * as S from "./Signup.styles";

const Signup = () => {
  return (
    <S.SignupContainer>
      <S.SignupCard>
        <S.SignupTitle>Signup</S.SignupTitle>
        <S.SignupForm>
          <Input width="100%" placeholder="Name" />
          <Input width="100%" placeholder="Email" />
          <Input width="100%" placeholder="Password" />
          <Input width="100%" placeholder="Confirm Password" />
          <Button>Signup</Button>
        </S.SignupForm>
        <S.AlreadyRegistered>
          Already have an account?{" "}
          <S.AlreadyRegisteredLink to="/auth/login">Login</S.AlreadyRegisteredLink>
        </S.AlreadyRegistered>
      </S.SignupCard>
    </S.SignupContainer>
  );
};

export default Signup;
