import { Warning } from "phosphor-react";
import { MessageNotFound } from "./styles";

interface NotFoundContentProps {
  message: string;
}

export function NotFoundContent({ message }: NotFoundContentProps) {
  return (
    <MessageNotFound>
      <Warning size={32} />
      {message}
    </MessageNotFound>
  );
}
