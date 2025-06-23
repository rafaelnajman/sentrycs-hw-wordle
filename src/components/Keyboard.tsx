import { useActionListener } from "../hooks/useActionListener";
import { ActionEvent } from "../utils/events";
import { MdOutlineBackspace } from "react-icons/md";
import styles from "./Keyboard.module.scss";

const Keyboard = () => {
  const actionListener = useActionListener();

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", ..."ZXCVBNM", "⌫"],
  ];

  const handleKeyClick = (key: string) => {
    if (key === "ENTER") {
      actionListener.emit(ActionEvent.SUBMIT, null);
    } else if (key === "⌫") {
      actionListener.emit(ActionEvent.REMOVE_CHAR, null);
    } else {
      actionListener.emit(ActionEvent.ADD_CHAR, key);
    }
  };

  return (
    <div className={styles.keyboard}>
      {keys.map((row, i) => (
        <div className={styles["keyboard-row"]} key={i}>
          {row.map((key) => (
            <button
              className={`${styles["keyboard-button"]} ${key === "⌫" || key === "ENTER" ? styles["wide"] : ""}`}
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key === "⌫" ? <MdOutlineBackspace size={24} /> : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
