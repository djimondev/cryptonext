import { useEffect, useState } from "react";

export function useLastUpdated(interval = 60000) {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdated(new Date());
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return lastUpdated;
}
