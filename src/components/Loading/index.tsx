import { CircleNotch } from "phosphor-react";
import { LoadingContainer } from "./styles";
import { colors } from "../../styles/tokens";

type ColorTypes = keyof typeof colors;

interface LoadingProps {
  size?: number;
  color?: ColorTypes;
}

export function Loading({ size = 24, color = "gray400" }: LoadingProps) {
  return (
    <LoadingContainer>
      <CircleNotch size={size} color={colors[color]} weight="bold" />
    </LoadingContainer>
  );
}
