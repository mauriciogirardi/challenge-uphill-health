import { ContainerHeader, ContentHeader, BackButton } from "./styles";
import { InputSearch } from "../InputSearch";
import { useSearch } from "../../hooks/useSearch";
import { House } from "phosphor-react";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  hiddenSearchAndShowBack?: boolean;
}

export function Header({ hiddenSearchAndShowBack = false }: HeaderProps) {
  const { error, onChangeSearch, value } = useSearch();
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} alt="logo uphill" />
        {!hiddenSearchAndShowBack ? (
          <InputSearch onChange={onChangeSearch} error={error} value={value} />
        ) : (
          <BackButton to={"/"}>
            <House size={20} />
            Back Home
          </BackButton>
        )}
      </ContentHeader>
    </ContainerHeader>
  );
}
