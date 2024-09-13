import { useEffect } from "react";

export function useEnterKey() {
  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
}
