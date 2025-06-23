import { useCallback } from "react";

export const useWordValidation = (wordLength: number) => {
  const validateWordLength = useCallback(
    (letters: string[]) => {
      return letters.length === wordLength;
    },
    [wordLength]
  );

  const formatWord = useCallback((letters: string[]) => {
    return letters.join("").toLowerCase();
  }, []);

  const canAddLetter = useCallback(
    (letters: string[]) => {
      return letters.length < wordLength;
    },
    [wordLength]
  );

  return {
    validateWordLength,
    formatWord,
    canAddLetter,
  };
};
