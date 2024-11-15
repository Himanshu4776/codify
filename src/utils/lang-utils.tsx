import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

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
