import { ReactElement, useState } from "react";
import { LanguageContext } from "./languageContext";

export interface LanguageContextProviderProps {
  children: ReactElement;
  defaultLanguage?: string;
}

export const LanguageContextProvider = (
  props: LanguageContextProviderProps
): ReactElement => {
  const [lang, setLang] = useState<string>(props.defaultLanguage ?? "");
  return (
    <LanguageContext.Provider
      value={{
        language: lang,
        setLanguage: (l) => setLang(l),
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
