import { useCallback, useEffect, useState } from "react";
import { CopyIcon } from "../icons";
import styles from "./input.module.scss";
import classNames from "classnames";

interface IProps {
  value: string;
  label: string;
}

export const Input = ({ value, label }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setIsCopied(true);
        console.log("COPIED:");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  }, [value]);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isCopied]);

  return (
    <div className={styles.label} onClick={copyToClipboard}>
      <p>{`${label}:`}</p>
      <h4
        className={styles.input}
        style={{
          width: label.includes("Призначення")
            ? `${value.length - 1}ch`
            : `${value.length + 3}ch`,
        }}
      >
        {value}
      </h4>
      <CopyIcon className={styles.icon} />
      <div
        className={classNames(styles.copied, {
          [styles.copied_true]: isCopied,
        })}
      >
        скопійовано
      </div>
    </div>
  );
};
