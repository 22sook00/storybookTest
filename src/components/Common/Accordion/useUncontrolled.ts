import { useState } from "react";

interface UseUncontrolledInput<T> {
  /** Value for controlled state */
  title?: T;

  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Controlled state onChange handler */
  onChange?(title: T): void;
}

export function useUncontrolled<T>({
  title,
  defaultValue,
  onChange = () => {},
}: UseUncontrolledInput<T>): [T, (title: T) => void, boolean] {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : ""
  );

  const handleUncontrolledChange = (val: T) => {
    setUncontrolledValue(val);
    onChange?.(val);
  };

  if (title !== undefined) {
    return [title as T, onChange, true];
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false];
}
