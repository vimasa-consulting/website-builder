import type { Editor, Asset } from 'grapesjs';
import { observer } from 'mobx-react-lite';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import { useAppEditorStore } from '../../../store/appEditorStore';
import CodeField from '../../CodeField';
import { useState } from 'react';
import Button from '../../Button';
import { useI18nStore } from '../../../store/I18nStore';
import { cssFormat } from '../../StyleCode';
import { getPageSlug, toSafeFilename } from '../../../plugins/web/utils';

interface AssetDataUrl {
  mime: string,
  name: string,
  base64: string,
  found?: boolean;
}

type AssetDataUrlMap = Record<string, AssetDataUrl>;

const dataURLAssetsMap = (editor: Editor) => {
  const assets = editor.Assets.getAll();
  const dataUrlAssets:  AssetDataUrlMap = assets.reduce((result: AssetDataUrlMap, asset: Asset) => {
    const src = asset.getSrc();
    const match = src.match(/^data:([^;]+);/);
    if (match) {
      const base64 = src.split(',')[1];
      result[src] = {
        mime: match[1],
        name: toSafeFilename(asset.get('name')),
        base64,
      }
    }
    return result;
  }, {});

  return dataUrlAssets;
};

const escapeRegExpChars = (text: string) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

const replaceDataUrlAssets = (str: string, dataUrlMap: AssetDataUrlMap, opts: { pathPfx?: string } = {}) => {
  let result = str;
  const pathPfx = opts.pathPfx || '';

  for (const key in dataUrlMap) {
    if (result.includes(key)) {
      const dataUrlAsset = dataUrlMap[key];
      result = result.replace(new RegExp(escapeRegExpChars(key), 'g'), `${pathPfx}${dataUrlAsset.name}`);
      dataUrlAsset.found = true;
    }
  }

  return result;
}

export default function DownloadCode() {
  const i18nStore = useI18nStore();
  const editor = useAppEditorStore().editor!;
  const [html] = useState(() => editor.getHtml());
  const [css] = useState(() => cssFormat(editor.getCss() as string));
  const t = (key: string) => i18nStore.t(`actions.showCode.${key}`);

  const exportProject = () => {
    const dataUrlMap = dataURLAssetsMap(editor);
    const ASSETS_DIR = 'assets';

    editor.runCommand('gjs-export-zip', {
      filenamePfx: 'builder-',
      root: async (editor: Editor) => {
        const pages = editor.Pages.getAll();
        const pagesHTML = pages.reduce((acc, page) => {
          const filename = "page";//getPageSlug(editor, page);
          let html = `<!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>${page.getName()}</title>
                <meta name="generator" content="GrapesJS Studio">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta property="og:type" content="website">
                <meta name="robots" content="index,follow">
                <link rel="stylesheet" href="./css/style.css">
              </head>
              ${page.getMainComponent().toHTML()}
            </html>
          `;
          html = replaceDataUrlAssets(html, dataUrlMap, {
            pathPfx: `${ASSETS_DIR}/`,
          });
          acc[filename] = html;

          return acc;
        }, {} as Record<string, string>);

        const assets: Record<string, string> = {};
        const cssString = replaceDataUrlAssets(
          editor.getCss({ keepUnusedStyles: true }) || '',
          dataUrlMap,
          { pathPfx: `../${ASSETS_DIR}/`, },
        );

        for (const key in dataUrlMap) {
          const dataUrlAsset = dataUrlMap[key];
          if (dataUrlAsset.found) {
            assets[dataUrlAsset.name] = atob(dataUrlAsset.base64);
          }
        }

        const result = {
          'gjs-project.grapesjs': JSON.stringify(editor.getProjectData()),
          // 'testfile.txt': 'Copyright © YEAR Company name € È $%&',
          // 'testfile.html': 'Copyright © YEAR Company name € È $%&',
          css: {
            'style.css': cssString,
          },
          ...pagesHTML,
          ...(!!Object.keys(assets).length && {
            [ASSETS_DIR]: assets,
          })
        };

        return result;
      }
    });
  }
  exportProject();
  return (
    <Grid col space="m">
      {/* <GridItem>{ i18nStore.t('actions.importCode.content') }</GridItem> */}
      <Grid justify="end">
        <Button size="m2" variant="pr" onClick={exportProject}>{t('exportButton')}</Button>
      </Grid>
    </Grid>
  );
};
