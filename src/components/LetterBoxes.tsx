import styles from "./LetterBoxes.module.scss";

type Props = {
  letters: string[];
  status: "idle" | "valid" | "invalid";
};

export default function LetterBoxes({ letters, status }: Props) {
  return (
    <div className={styles["box-container"]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`${styles.box} ${styles[status]}`}>
          {letters[i] || ""}
        </div>
      ))}
    </div>
  );
}
