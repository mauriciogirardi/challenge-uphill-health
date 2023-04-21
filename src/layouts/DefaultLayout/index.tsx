import { ReactNode } from "react";

import { ContainerDefaultLayout } from "./styles";
import { Header } from "../../components/Header";

interface DefaultLayoutProps {
  children: ReactNode;
  hiddenSearchAndShowBack?: boolean;
  title?: string;
}

export function DefaultLayout({
  children,
  hiddenSearchAndShowBack,
  title = "",
}: DefaultLayoutProps) {
  document.title = `Dash Github ${title}`;

  return (
    <>
      <Header hiddenSearchAndShowBack={hiddenSearchAndShowBack} />
      <ContainerDefaultLayout>{children}</ContainerDefaultLayout>
    </>
  );
}
