import "@/styles/globals.css";
import { createContext, useContext, useState } from "react";

const LangContext = createContext(null);

export const useLangContext = () => useContext(LangContext);

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("ENG");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}
