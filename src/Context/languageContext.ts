import { createContext } from "react";

export interface LanguageContextContract {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextContract>({
  language: "",
  setLanguage: (s: string) => {
    /*Implementation in Provider*/
  },
});
