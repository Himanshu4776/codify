export interface FooterProps {
    lang: string;
    theme: string;
}

export function Footer({lang, theme}: FooterProps) {
    return (
        <footer className="p-4 bg-white dark:bg-gray-800 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current language: {lang.charAt(0).toUpperCase() + lang.slice(1)} | Theme: {theme}
        </p>
      </footer>
    );
}