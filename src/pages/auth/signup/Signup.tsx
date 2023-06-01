import { useState } from "react";
import { useNavigate } from "react-router";
import useApi from "../../../api/useApi";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
import * as S from "./Signup.styles";

const Signup = () => {
  const { register } = useApi();
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      // TODO: toast on error
      return;
    }

    setLoading(true);
    try {
      await register({
        name,
        email,
        password
      });
      // TODO: toast on success
      navigate("/auth/login");
    } catch (error) {
      // TODO: toast on error
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <S.SignupContainer>
      <S.SignupCard>
        <S.SignupTitle>Signup</S.SignupTitle>
        <S.SignupForm>
          <Input
            width="100%"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            width="100%"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            width="100%"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            width="100%"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <Button disabled={password !== confirmPassword || loading} onClick={handleSignup}>
            Signup
          </Button>
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
