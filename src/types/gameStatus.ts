export const GameStatus = {
  IDLE: "idle",
  VALID: "valid",
  INVALID: "invalid",
} as const;

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus];
