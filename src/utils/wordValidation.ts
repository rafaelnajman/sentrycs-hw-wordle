const WORD_LENGTH = Number(import.meta.env.VITE_WORD_LENGTH) || 5;

export const validateWordLength = (letters: string[]): boolean => {
  return letters.length === WORD_LENGTH;
};

export const formatWord = (letters: string[]): string => {
  return letters.join("").toLowerCase();
};

export const canAddLetter = (letters: string[]): boolean => {
  return letters.length < WORD_LENGTH;
};
