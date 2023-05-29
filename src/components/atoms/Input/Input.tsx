import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as S from "./Input.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../Typography/Typography.styles";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "styled-components";

type InputProps = {
  placeholder?: string;
  icon?: IconDefinition;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
  borderRadius?: string;
  type?: string;
  max?: number;
  error?: string;
};

const Input = ({
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  width,
  borderRadius,
  max,
  error = ""
}: InputProps) => {
  const theme = useTheme();

  if (type === "file") {
    return (
      <S.InputWrapper width={width}>
        {icon && (
          <S.IconWrapper>
            <FontAwesomeIcon icon={icon} />
          </S.IconWrapper>
        )}
        <S.FileInputWrapper>
          <S.FileInputLabel htmlFor="file-input">
            Choose a file
            <S.FileInput id="file-input" type="file" onChange={onChange} onBlur={onBlur} />
          </S.FileInputLabel>
          <S.FileName>{value ? value : "No file selected"}</S.FileName>
        </S.FileInputWrapper>
      </S.InputWrapper>
    );
  }

  return (
    <>
      {" "}
      <S.InputWrapper width={width}>
        {icon && (
          <S.IconWrapper>
            <FontAwesomeIcon icon={icon} />
          </S.IconWrapper>
        )}
        <S.InputField
          max={max}
          min={0}
          $borderRadius={borderRadius}
          value={value}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          icon={icon}
        />
      </S.InputWrapper>
      <AnimatePresence>
        {error && (
          <motion.div
            key={error}
            initial={{ opacity: 0, height: "0" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: "0" }}>
            <Typography.Base padding="8px 0 0 0" color={theme.colors.error[400]}>
              {error}
            </Typography.Base>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Input;
