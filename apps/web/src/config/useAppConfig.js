import { useContext } from "react";
import ConfigContext from "./ConfigContext";

export default function useAppConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) {
    throw new Error("useAppConfig must be used inside <ConfigProvider>");
  }
  return ctx;
}
