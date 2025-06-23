import LetterBoxes from "./components/LetterBoxes";
import Keyboard from "./components/Keyboard";
import { useKeyboardInput } from "./hooks/useKeyboardInput";
import { useGameLogic } from "./hooks/useGameLogic";
import styles from "./App.module.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  useKeyboardInput();
  const { letters, status, WORD_LENGTH } = useGameLogic();

  return (
    <div className={styles.app}>
      <ThemeSwitcher />
      <LetterBoxes letters={letters} status={status} length={WORD_LENGTH} />
      <Keyboard />
    </div>
  );
}

export default App;
