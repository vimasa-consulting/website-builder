import Editor, { EditorProps } from '@monaco-editor/react';
import { observer } from 'mobx-react-lite';
import { useLocalSettingsStore } from '../../store/localSettings';
import { isDef } from '../../utils';
import { cx } from '../../utils/makeCls';
import LabelField from '../LabelField';
import { br, cl } from '../theme';

export type CodeFieldProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  language: string;
  onChange?: EditorProps['onChange'];
  clean?: boolean;
  padding?: number;
  label?: React.ReactNode;
};

// Monaco options: https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html
const defOptions: EditorProps['options'] = {
  minimap: { enabled: false },
  lineNumbers: 'off',
  scrollBeyondLastLine: false,
  contextmenu: false,
  fixedOverflowWidgets: true, // Render widgets outside of the container
  showFoldingControls: 'always',
  suggestOnTriggerCharacters: false,
  lineDecorationsWidth: 0,
  renderLineHighlight: 'none',
  wordWrapOverride1: 'off', // disable wordWrap
  tabSize: 2,
  // formatOnType: true,
  // formatOnPaste: true,
  // autoIndent: true,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontal: 'hidden',
    // alwaysConsumeMouseWheel: false, ?
  },
  // readOnly: true,
  // language: 'json',
  // lineNumbers: (lineNumber: number) => lineNumber.toString(),
  // lineNumbersMinChars: 5,
  // selectOnLineNumbers: false,
  // matchBrackets: 'never',
};

// const clsMain = css({
//   minHeight: '200px',
//   resize: 'vertical',
//   overflow: 'auto',
//   padding: 0,
// });

/**
 * Editor props: https://github.com/suren-atoyan/monaco-react#props
 * Editor playground: https://monaco-react.surenatoyan.com/
 *
 * List of custom themes: https://github.com/brijeshb42/monaco-themes/tree/master/themes
 * How to define themes: https://codesandbox.io/s/monaco-theme-oijvt
 */
export default observer(function CodeField({ value, label, language, onChange, clean, padding, readOnly }: CodeFieldProps) {
  const { isDarkTheme } = useLocalSettingsStore();
  const defValue = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  // TODO use beautifiers for CSS/HTML/JS
  // https://github.com/beautify-web/js-beautify
  // Usage for CSS: https://github.com/troy351/css-format-monaco/blob/master/src/index.ts

  return (
    <div className="w-full h-full">
      { !!label && <LabelField>{ label }</LabelField>}
      <Editor
        defaultLanguage={language}
        defaultValue={defValue}
        theme={isDarkTheme ? 'vs-dark' : 'light'}
        className={cx('min-h-[200px]', br.b, br.rnd, cl.br)}
        options={{
          ...defOptions,
          readOnly,
          ...(clean && {
            overviewRulerLanes: 0, // disable the right side ruler
            selectOnLineNumbers: false,
            folding: false,
            matchBrackets: 'never',
          }),
          ...(isDef(padding) && {
            lineDecorationsWidth: padding! * 2,
            padding: {
              top: padding,
              bottom: padding,
            }
          })
        }}
        onChange={onChange}
        onMount={(editor) => {
          let formatDone = false;
          const format = () => editor.getAction('editor.action.formatDocument')?.run();
          editor.onDidChangeModelLanguageConfiguration(format)
          editor.onDidScrollChange(() => {
            if (!formatDone) {
              formatDone = true;
              format()
            }
          });
          setTimeout(format, 10);
        }}
      />
    </div>
  );
});
