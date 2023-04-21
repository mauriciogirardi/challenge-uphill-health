import { ERROR_MESSAGE_DEFAULT } from "../../utils/messagesErrors";
import { PageErrorContainer } from "./styles";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { ApolloError } from "@apollo/client";

import error500Svg from "../../assets/error-500.svg";
import error400Svg from "../../assets/error-404.svg";

interface PageErrorProps {
  error?: ApolloError | undefined;
  message?: string;
  showHeader?: boolean;
  title?: string;
}

export function PageErrors({
  error,
  message,
  title,
  showHeader = true,
}: PageErrorProps) {
  const renderMessageError = () => (
    <PageErrorContainer>
      <h1>{title || error?.message}</h1>
      <span>{error?.message ? ERROR_MESSAGE_DEFAULT : message}</span>
      <img src={error?.message ? error500Svg : error400Svg} />
    </PageErrorContainer>
  );

  if (!showHeader) return renderMessageError();

  return (
    <DefaultLayout hiddenSearchAndShowBack title="/ Error">
      {renderMessageError()}
    </DefaultLayout>
  );
}
