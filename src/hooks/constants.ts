import { atom } from "jotai";
export const langTypeAtom = atom<"javascript" | "cpp" | "java" | "python">("javascript");

export const htmlStarter = `<div>
  <h1>Hello, World!</h1>
</div>`

export const cssStarter = `body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
}`