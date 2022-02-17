import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribeNetInfo();
    };
  }, []);

  return { isConnected };
};

export default useNetInfo;
