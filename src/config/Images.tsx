import kiranaDark from "../assets/Kirana-dark.png";
import kiranaLight from "../assets/Kirana-light.png";

import coderzDark from "../assets/coderz-dark.webp";
import coderzLight from "../assets/coderz-light.webp";

import genzDark from "../assets/Genz-light.png";
import genzLight from "../assets/Genz-light.png";


export interface ThemeImage {
  light: string;
  dark: string;
}

export const Images = {
   coderz: {
    light: coderzLight,
    dark: coderzDark,
  },
  kirana: {
    light: kiranaLight,
    dark: kiranaDark,
  },
  genz: {
    light: genzLight,
    dark: genzDark,
  }
};