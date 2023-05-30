import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as S from "./AutoComplete.style";
import { useState } from "react";
import { debounce } from "lodash";
import Input from "../../atoms/Input/Input";

type AutoCompleteProps = {
  placeholder?: string;
  maxVisibleItems?: number;
  icon?: IconDefinition;
  suggestions?: string[];
  onChange?: (value: string) => void;
  onChoose?: (value: string) => void;
  inputStyle: any;
};

const AutoComplete = ({
  suggestions = [],
  maxVisibleItems = 3,
  icon,
  placeholder,
  onChange,
  onChoose,
  inputStyle
}: AutoCompleteProps) => {
  let blurTimeout: any;
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  const handleDebouncedInputChange = debounce((value: string) => {
    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase()) ||
        (value.length > 2 && suggestion.toLowerCase().includes(value.toLowerCase()))
    );
    setFilteredSuggestions(filtered);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleDebouncedInputChange(value);
    onChange?.(value);
  };

  const handleFocus = () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }
    setOpen(true);
  };

  const handleBlur = () => {
    blurTimeout = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleChoose = (value: string) => {
    setInputValue(value);
    onChange?.(value);
    onChoose?.(value);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
    if (event.key === "Enter") {
      onChoose?.(inputValue);
    }
  };

  return (
    <S.AutoCompleteContainer>
      <Input
        onKeyDown={onEnter}
        width="100%"
        onChange={handleInputChange}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        icon={icon}
        placeholder={placeholder}
        {...inputStyle}
      />
      {!!filteredSuggestions?.length && open && (
        <S.MenuContainer maxVisibleItems={maxVisibleItems} itemsCount={filteredSuggestions.length}>
          {filteredSuggestions.map((suggestion) => {
            return (
              <S.AutoCompleteItem
                icon={!!icon}
                onClick={() => {
                  handleChoose(suggestion);
                }}
                key={suggestion}
              >
                {suggestion}{" "}
              </S.AutoCompleteItem>
            );
          })}
        </S.MenuContainer>
      )}
    </S.AutoCompleteContainer>
  );
};

export default AutoComplete;
