import { ReactNode } from "react";

const { NextUIProvider } = require("@nextui-org/react");

interface Props {
  children: ReactNode;
}
const Providers: React.FC<Props> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
export default Providers;
