import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextContract,
} from "./Context/languageContext";

export const Page2 = () => {
  const {setLanguage, language} =
    useContext<LanguageContextContract>(LanguageContext);
  return (
    <div>
      <h1>Page2</h1>
      <p>Language is {language}</p>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("fr")}>French</button>
    </div>
  );
};
