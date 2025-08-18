import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue?: string;
  language?: string;
  theme?: string;
  height?: string;
  onChange?: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue = '// Type your code here',
  language = 'javascript',
  theme = 'vs-dark',
  height = '500px',
  onChange,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleEditorChange = (value: string | undefined) => {
    setValue(value || '');
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="code-editor">
      <Editor
        height={height}
        language={language}
        value={value}
        theme={theme}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
          tabSize: 2,
          lineNumbers: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor;