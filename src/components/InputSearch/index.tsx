import { InputHTMLAttributes, useRef, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { InputSearchContainer } from "./styles";
import { useSearch } from "../../hooks/useSearch";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickSearch?: () => void;
  error?: boolean;
}

export function InputSearch({ error, ...rest }: InputSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { onChangeSearch, value } = useSearch();

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  return (
    <InputSearchContainer
      data-testid="container-search"
      focus={isFocused}
      error={error}
    >
      <MagnifyingGlass data-testid="icon-input" weight="bold" size={18} />
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={onChangeSearch}
        value={value}
        {...rest}
      />
    </InputSearchContainer>
  );
}
