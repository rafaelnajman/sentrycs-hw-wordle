import { useEffect } from "react";
import { useActionListener } from "./useActionListener";
import { ActionEvent } from "../utils/events";

export const useKeyboardInput = () => {
  const actionListener = useActionListener();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      // Handle letter keys (A-Z)
      if (/^[A-Z]$/.test(key)) {
        actionListener.emit(ActionEvent.ADD_CHAR, key);
        event.preventDefault();
      }
      // Handle Enter key
      else if (event.key === "Enter") {
        actionListener.emit(ActionEvent.SUBMIT, null);
        event.preventDefault();
      }
      // Handle Backspace key
      else if (event.key === "Backspace") {
        actionListener.emit(ActionEvent.REMOVE_CHAR, null);
        event.preventDefault();
      }
    };

    // Add event listener to document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [actionListener]);
};
