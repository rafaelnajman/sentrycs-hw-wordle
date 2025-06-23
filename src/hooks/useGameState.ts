import { useState } from "react";
import { GameStatus } from "../utils/gameStatus";

export const useGameState = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<GameStatus>(GameStatus.IDLE);

  return {
    letters,
    setLetters,
    status,
    setStatus,
  };
};
