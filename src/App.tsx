import React from "react";
import styles from "./app.module.scss";
import { Input } from "./components";

function App() {
  const DATA = [
    {
      title: "Отримувач",
      value: "ФОП Гиря Марія Володимирівна",
    },
    {
      title: "IBAN",
      value: "UA373220010000026005330160096",
    },
    {
      title: "ЄДРПОУ",
      value: "3589104227",
    },
    {
      title: "Призначення",
      value: "оплата за випічку від - нік в телеграм",
    },
  ];
  return (
    <main className={styles.app}>
      <div className={styles.app__dataList}>
        {DATA.map((dataItem) => (
          <Input
            key={dataItem.title}
            label={dataItem.title}
            value={dataItem.value}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
