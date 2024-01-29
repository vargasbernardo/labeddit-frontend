import { Button } from "./Button1Style";

export default function Button1({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
