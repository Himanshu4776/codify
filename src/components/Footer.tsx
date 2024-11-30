export interface FooterProps {
  lang: string;
  theme: string;
  selectedPath: string | null;
}

export function Footer({ lang, theme, selectedPath }: FooterProps) {
  return (
    <footer className="p-4 bg-white dark:bg-gray-800 border-t">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {selectedPath != null
          ? `Current language: ${
              lang.charAt(0).toUpperCase() + lang.slice(1)
            } | Theme: ${theme}`
          : "© 2024 Codify Code Editor. All rights reserved."}
      </p>
    </footer>
  );
}
