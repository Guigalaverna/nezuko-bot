import { User } from "discord.js";
import languages from "../configurations/languages.json";

const availableLanguages = [
  ...new Set(languages.map(language => language.name)),
];

export interface Book {
  title: string;
  author: string;
  language: availableLanguages;
  category: string;
}
