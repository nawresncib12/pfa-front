import Typography from "../Typography/Typography.styles";
import * as S from "./SelectableBox.style";

type SelectableBoxProps = {
  title?: string;
  value: string;
  isSelected: boolean;
  toggleOption: (val: string) => void;
};

const SelectableBox = ({ value, toggleOption, title = value, isSelected }: SelectableBoxProps) => {
  const toggleSelected = () => {
    toggleOption(value);
  };

  return (
    <S.SelectableBoxContainer onClick={toggleSelected} $isSelected={isSelected}>
      <Typography.Subtitle color="inherit" weight="semiBold">
        {title}
      </Typography.Subtitle>
    </S.SelectableBoxContainer>
  );
};

export default SelectableBox;
