import * as React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 769
      : false
  );

  React.useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: coarse)');
    const widthQuery = window.matchMedia('(max-width: 768px)');

    const onChange = () => {
      setIsMobile(pointerQuery.matches || widthQuery.matches);
    };

    pointerQuery.addEventListener("change", onChange);
    widthQuery.addEventListener("change", onChange);
    onChange();

    return () => {
      pointerQuery.removeEventListener("change", onChange);
      widthQuery.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}
