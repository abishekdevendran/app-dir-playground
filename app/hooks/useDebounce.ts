import { useEffect } from "react";

export function useDebounce<T>(value: T,fn: Function, delay: number) {
  useEffect(() => {
    const handler = setTimeout(() => {
      fn(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, fn, delay]);
}