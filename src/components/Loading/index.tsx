import { CircleNotch } from "phosphor-react";
import { LoadingContainer } from "./styles";
import { colors } from "../../styles/tokens";

type ColorTypes = keyof typeof colors;

interface LoadingProps {
  size?: number;
  color?: ColorTypes;
  title?: string;
}

export function Loading({ size = 24, color = "gray400", title }: LoadingProps) {
  return (
    <LoadingContainer>
      <CircleNotch
        data-testid="icon-loading"
        size={size}
        color={colors[color]}
        weight="bold"
      />
      <p>{title}</p>
    </LoadingContainer>
  );
}
