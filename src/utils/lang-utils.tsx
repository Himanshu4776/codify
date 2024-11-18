import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { linter, lintGutter, Diagnostic } from "@codemirror/lint"
import { EditorView } from "@codemirror/view"
import { syntaxTree } from "@codemirror/language"



export const SUPPORTED_LANGUAGES = {
  javascript: "javascript",
  cpp: "cpp",
  java: "java",
  python: "python",
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export const getLanguageExtension = (language: SupportedLanguage) => {
  switch (language) {
    case SUPPORTED_LANGUAGES.javascript:
      return javascript({ jsx: true });
    case SUPPORTED_LANGUAGES.cpp:
      return cpp();
    case SUPPORTED_LANGUAGES.java:
      return java();
    case SUPPORTED_LANGUAGES.python:
      return python();
    default:
      return javascript();
  }
};

export const LANG_OPTIONS = Object.values(SUPPORTED_LANGUAGES);

export function getDefaultCodeValue(language: SupportedLanguage) {
  switch (language) {
    case SUPPORTED_LANGUAGES.javascript:
      return `// JavaScript Starter Code
  console.log('Hello World!');
  
  // Write your code here
  function main() {
    
  }
  
  main();`;

    case SUPPORTED_LANGUAGES.cpp:
      return `#include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello World!" << endl;
      
      // Write your code here
      
      return 0;
  }`;

    case SUPPORTED_LANGUAGES.java:
      return `public class Main {
      public static void main(String[] args) {
          System.out.println("Hello World!");
          
          // Write your code here
          
      }
  }`;

    case SUPPORTED_LANGUAGES.python:
      return `# Python Starter Code
  def main():
      print("Hello World!")
      
      # Write your code here
      
  if __name__ == "__main__":
      main()`;

    default:
      return "";
  }
}

export const createLinter = (language: string) => {
  return linter((view: EditorView) => {
    const diagnostics: Diagnostic[] = []
    const tree = syntaxTree(view.state)
    
    tree.cursor().iterate(node => {
      if (node.type.isError) {
        diagnostics.push({
          from: node.from,
          to: node.to,
          severity: 'error',
          message: `Syntax error in ${language}`
        })
      }
    })
    
    return diagnostics
  })
}