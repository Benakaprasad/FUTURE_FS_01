import * as React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false
  );

  React.useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');
    const onChange = () => {
      setIsMobile(mql.matches);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}