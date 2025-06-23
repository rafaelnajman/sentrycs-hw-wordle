export const ActionEvent = {
  ADD_CHAR: "ADD_CHAR",
  REMOVE_CHAR: "REMOVE_CHAR",
  SUBMIT: "SUBMIT",
} as const;

export type ActionEvent = (typeof ActionEvent)[keyof typeof ActionEvent];
