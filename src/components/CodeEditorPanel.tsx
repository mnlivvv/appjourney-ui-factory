import { useState } from 'react';
import CodeEditor from './CodeEditor';

interface CodeEditorPanelProps {
  initialCode?: string;
  initialLanguage?: string;
}

const CodeEditorPanel: React.FC<CodeEditorPanelProps> = ({
  initialCode = '// Welcome to the Code Editor\n\nfunction greet() {\n  console.log("Hello, world!");\n}\n\ngreet();',
  initialLanguage = 'javascript',
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [theme, setTheme] = useState<string>('vs-dark');
  
  const languages = [
    'javascript', 'typescript', 'html', 'css', 'json', 'python', 
    'java', 'csharp', 'php', 'go', 'ruby', 'swift', 'sql'
  ];
  
  const themes = [
    { label: 'Dark', value: 'vs-dark' },
    { label: 'Light', value: 'vs' },
    { label: 'High Contrast', value: 'hc-black' }
  ];

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div className="code-editor-panel">
      <div className="code-editor-toolbar">
        <div className="editor-controls">
          <label htmlFor="language-select">
            Language:
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="editor-select"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </label>
          
          <label htmlFor="theme-select">
            Theme:
            <select
              id="theme-select"
              value={theme}
              onChange={handleThemeChange}
              className="editor-select"
            >
              {themes.map((themeOption) => (
                <option key={themeOption.value} value={themeOption.value}>
                  {themeOption.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      
      <CodeEditor
        initialValue={code}
        language={language}
        theme={theme}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditorPanel;