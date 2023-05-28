import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as S from "./Input.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  placeholder?: string;
  icon?: IconDefinition;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  width?: string;
};

const Input = ({
  placeholder,
  icon,
  value,
  onChange,
  onFocus,
  onBlur,
  width,
}: InputProps) => {
  return (
    <S.InputWrapper width={width}>
      {icon && (
        <S.IconWrapper>
          <FontAwesomeIcon icon={icon} />
        </S.IconWrapper>
      )}
      <S.InputField
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        icon={icon}
      />
    </S.InputWrapper>
  );
};

export default Input;
