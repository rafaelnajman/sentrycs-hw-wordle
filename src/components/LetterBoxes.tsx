import styles from "./LetterBoxes.module.scss";
import { GameStatus } from "../utils/gameStatus";

type Props = {
  letters: string[];
  status: GameStatus;
  length?: number;
};

export default function LetterBoxes({ letters, status, length = 5 }: Props) {
  return (
    <div className={styles["box-container"]}>
      {Array.from({ length }).map((_, i) => (
        <div key={i} className={`${styles.box} ${styles[status]}`}>
          {letters[i] || ""}
        </div>
      ))}
    </div>
  );
}
