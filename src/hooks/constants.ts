import { atom } from "jotai";
export const themeTypeAtom = atom<Extension>(stringToExtension("github"));

// Assuming Extension type as defined earlier
type Extension =
  | {
      extension: Extension;
    }
  | readonly Extension[];

// Function to convert string into a nested Extension
function stringToExtension(value: string): Extension {
  // Base case: return an object with the extension property recursively nested
  return {
    extension: {
      extension: {
        extension: [],
      },
    },
  };
}
