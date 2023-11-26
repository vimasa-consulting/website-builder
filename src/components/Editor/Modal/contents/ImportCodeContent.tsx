import { observer } from 'mobx-react-lite';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import { useAppEditorStore } from '../../../store/appEditorStore';
import CodeField from '../../CodeField';
import { useState } from 'react';
import Button from '../../Button';
import { useI18nStore } from '../../../store/I18nStore';
import { useModalStore } from '../../../store/modalStore';

export default observer(function ImportCodeContent() {
  const modalStore = useModalStore();
  const i18nStore = useI18nStore();
  const editor = useAppEditorStore().editor!;
  const [content, setContent] = useState(`${editor.getHtml()}<style>${editor.getCss()}</style>`);

  const importContent = () => {
    editor.Css.clear();
    editor.setComponents(content.trim());
    modalStore.close();
  };

  return (
    <Grid col space="m">
      <GridItem>{ i18nStore.t('actions.importCode.content') }</GridItem>
      <GridItem className="h-[400px]">
          <CodeField value={content} onChange={(value) => setContent(value || '')} language="html"/>
      </GridItem>
      <Grid justify="end">
        <Button size="m2" variant="pr" onClick={importContent}>{i18nStore.t('actions.importCode.button')}</Button>
      </Grid>
    </Grid>
  );
});
