import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as S from "./Input.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  placeholder?: string;
  icon?: IconDefinition;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
  borderRadius?: string;
  type?: string;
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
}: InputProps) => {
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
            <S.FileInput
              id="file-input"
              type="file"
              onChange={onChange}
              onBlur={onBlur}
            />
          </S.FileInputLabel>
          <S.FileName>{value ? value : "No file selected"}</S.FileName>
        </S.FileInputWrapper>
      </S.InputWrapper>
    );
  }

  return (
    <S.InputWrapper width={width}>
      {icon && (
        <S.IconWrapper>
          <FontAwesomeIcon icon={icon} />
        </S.IconWrapper>
      )}
      <S.InputField
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
  );
};

export default Input;
