import { DependencyList, useEffect, useRef } from "react";

export const useDebounceEffect = (
  fnc: () => void,
  deps: DependencyList,
  delay: number
) => {
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      fnc();
      clearTimeout(ref.current);
    }, delay);
  }, [fnc, ...deps, delay]);
};
