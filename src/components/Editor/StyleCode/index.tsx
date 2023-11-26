/* eslint no-useless-escape: 0 */
import { useEditor } from "@grapesjs/react";
import type { CssRule } from "grapesjs";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useI18nStore } from "../../store/I18nStore";
import Button from "../Button";
import CodeField from "../CodeField";
import Grid from "../Grid";
import GridItem from "../GridItem";

// https://github.com/beautify-web/js-beautify
export function cssFormat(s: string) {
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/;\s*;/g, ";");
    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
    return s;
}

export default observer(function StyleCode() {
    const editor = useEditor();
    const i18nStore = useI18nStore();
    const { Styles } = editor;
    const rule = Styles.getSelected() as CssRule | undefined;
    const [codeId, setCodeId] = useState(0);
    const css = rule ? cssFormat(rule?.toCSS({ allowEmpty: true })) : '';
    const [tempCss, upTempCss] = useState<string | undefined>(css);

    useEffect(() => {
        const up = () => setCodeId((id) => ++id);
        const ev = Styles.events.custom;
        editor.on(ev, up);
        return () => { editor.off(ev, up) };
    }, [Styles, editor]);

    const updateCss = () => {
        if (tempCss) {
            const cssRule = editor.Parser.parseCss(tempCss)[0] as any;
            cssRule && rule?.setStyle(cssRule.style);
        }
    };

    return (
        <Grid className="relative" col full>
            <GridItem grow>
                {
                    !rule ?
                    i18nStore.t('noCode') :
                    <CodeField key={codeId} padding={5} language="css" value={css} onChange={upTempCss} clean/>
                }
            </GridItem>
            <Button className="absolute right-2 bottom-2 text-sm" variant="pr" size="m2" onClick={updateCss}>
                {i18nStore.t('update')}
            </Button>
        </Grid>
    );
  });