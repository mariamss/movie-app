import { useEffect } from "react";
import useNetInfo from "./src/hooks/useNetInfo";
import AppNavigation from "./src/navigation/Navigation";

export default function App() {
  const { isConnected } = useNetInfo();
  
  useEffect(() => {
    if (typeof isConnected !== "undefined" && !isConnected) {
      alert("connection lost");
    }
  }, [isConnected]);

  return <AppNavigation />;
}