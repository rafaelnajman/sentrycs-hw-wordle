import { useEffect, useState } from "react";
import LetterBoxes from "./components/LetterBoxes";
import Keyboard from "./components/Keyboard";
import { useActionListener } from "./utils/useActionListener";
import styles from "./App.module.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ActionEvent } from "./utils/events";

const WORD_LENGTH = 5;

function App() {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");

  const actionListener = useActionListener();

  useEffect(() => {
    actionListener.registerListener(ActionEvent.ADD_CHAR, (char: string) => {
      setLetters((prev) => (prev.length < WORD_LENGTH ? [...prev, char] : prev));
      if (letters.length <= WORD_LENGTH - 1) {
        setStatus("idle");
      }
    });

    actionListener.registerListener(ActionEvent.REMOVE_CHAR, () => {
      setLetters((prev) => prev.slice(0, -1));
      setStatus("idle");
    });

    actionListener.registerListener(ActionEvent.SUBMIT, async () => {
      if (letters.length !== WORD_LENGTH) {
        setStatus("invalid");
        return;
      }
      const word = letters.join("").toLowerCase();
      try {
        const isValid = await checkWordInDictionary(word);
        setStatus(isValid ? "valid" : "invalid");
      } catch (error) {
        console.error("Dictionary check failed:", error);
        setStatus("invalid");
      }
    });

    return () => {
      actionListener.removeListener(ActionEvent.ADD_CHAR);
      actionListener.removeListener(ActionEvent.REMOVE_CHAR);
      actionListener.removeListener(ActionEvent.SUBMIT);
    };
  }, [letters]);

  return (
    <div className={styles.app}>
      <ThemeSwitcher />
      <LetterBoxes letters={letters} status={status} />
      <Keyboard />
    </div>
  );
}

async function checkWordInDictionary(word: string): Promise<boolean> {
  console.log(`Checking if "${word}" is a valid word...`);
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  return response.ok;
}

export default App;
