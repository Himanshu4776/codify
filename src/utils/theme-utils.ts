import { solarizedDark, solarizedLight } from "@uiw/codemirror-theme-solarized";
import {copilot} from "@uiw/codemirror-theme-copilot";
import {dracula} from "@uiw/codemirror-theme-dracula";
import {githubDark, githubLight} from "@uiw/codemirror-theme-github";
import {androidstudio} from "@uiw/codemirror-theme-androidstudio";

export function getTheme(theme: string) {
    switch (theme) {
      case 'Github Light':
        return githubLight;
      case 'Github Dark':
        return githubDark;
      case 'Solarized Light':
        return solarizedLight;
      case 'Solarized Dark':
        return solarizedDark;
      case 'Copilot':
        return copilot;
      case 'Dracula':
        return dracula;
      case 'Android Studio':
        return androidstudio;
      default:
        return githubDark;
    }
}

export const THEME_NAMES = {
    ANDROIDSTUDIO: 'Android Studio',
    DRACULA: 'Dracula',
    GITHUB_DARK: 'Github Dark',
    GITHUB_LIGHT: 'Github Light',
    COPILOT: 'Copilot',
    SOLARIZED_DARK: 'Solarized Dark',
    SOLARIZED_LIGHT: 'Solarized Light',
} as const;
  
export const THEME_OPTIONS = Object.values(THEME_NAMES);
  