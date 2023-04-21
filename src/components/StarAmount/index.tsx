import { Star } from "phosphor-react";
import { colors } from "../../styles/tokens";
import { ContainerStarAmount, StarContent } from "./styles";

interface StarIconProps {
  values?: number | string;
}

export function StarAmount({ values }: StarIconProps) {
  return (
    <ContainerStarAmount>
      <StarContent>
        <Star size={10} weight="fill" color={colors.white} />
      </StarContent>
      {values && <p>{values}</p>}
    </ContainerStarAmount>
  );
}
