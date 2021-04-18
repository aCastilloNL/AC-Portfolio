import { useState, useCallback } from "react";

export default function useToggle(init = false) {
  const [on, setOn] = useState(init);

  const press = useCallback(() => {
    setOn((click) => !click);
  }, []);

  return [on, press];
};
