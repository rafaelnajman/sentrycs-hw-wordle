import { useGameState } from "./useGameState";
import { useDictionary } from "./useDictionary";
import { useWordValidation } from "./useWordValidation";
import { useActionListener } from "./useActionListener";
import { ActionEvent } from "../utils/events";
import { GameStatus } from "../utils/gameStatus";
import { useEffect } from "react";

const WORD_LENGTH = Number(import.meta.env.VITE_WORD_LENGTH) || 5;

export const useGameLogic = () => {
  // Separate concerns into focused hooks
  const { letters, setLetters, status, setStatus } = useGameState();
  const { checkWordInDictionary } = useDictionary();
  const { validateWordLength, formatWord, canAddLetter } = useWordValidation(WORD_LENGTH);

  const actionListener = useActionListener();

  // Orchestrate actions with all the focused hooks
  useEffect(() => {
    actionListener.registerListener(ActionEvent.ADD_CHAR, (char: string) => {
      setLetters((prev) => (canAddLetter(prev) ? [...prev, char] : prev));
      if (letters.length <= WORD_LENGTH - 1) {
        setStatus(GameStatus.IDLE);
      }
    });

    actionListener.registerListener(ActionEvent.REMOVE_CHAR, () => {
      setLetters((prev) => prev.slice(0, -1));
      setStatus(GameStatus.IDLE);
    });

    actionListener.registerListener(ActionEvent.SUBMIT, async () => {
      if (!validateWordLength(letters)) {
        setStatus(GameStatus.INVALID);
        return;
      }

      const word = formatWord(letters);
      try {
        const isValid = await checkWordInDictionary(word);
        setStatus(isValid ? GameStatus.VALID : GameStatus.INVALID);
      } catch (error) {
        console.error("Word submission failed:", error);
        setStatus(GameStatus.INVALID);
      }
    });

    return () => {
      actionListener.removeListener(ActionEvent.ADD_CHAR);
      actionListener.removeListener(ActionEvent.REMOVE_CHAR);
      actionListener.removeListener(ActionEvent.SUBMIT);
    };
  }, [
    letters,
    setLetters,
    setStatus,
    WORD_LENGTH,
    validateWordLength,
    formatWord,
    canAddLetter,
    checkWordInDictionary,
    actionListener,
  ]);

  return {
    letters,
    status,
    checkWordInDictionary,
    WORD_LENGTH,
  };
};
