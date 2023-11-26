import { useEffect, useRef } from "react";
import { loadScript } from "../../utils/dom";
import { cx } from "../../utils/makeCls";
import Grid from "../Grid";
import { br, cl } from "../theme";

export default function AdsBanner() {
    const adElRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adEl = adElRef.current;
        if (!adEl) return;

        const load = async () => {
            // await loadScript('https://m.servedby-buysellads.com/monetization.js');
            // const bsa = (window as any)._bsa;
            // bsa?.init('default', 'CK7I62QJ', 'placement:grapesjscomdocs', { target: '#native-carbon' });
            loadScript('https://cdn.carbonads.com/carbon.js?serve=CEAIVK77&placement=grapesjscom', {
                onScript: (scrEl) => {
                    scrEl.id = '_carbonads_js';
                    adEl.appendChild(scrEl);
                },
            })
        }

        load();

        return () => {
            adEl.innerHTML = '';
        };
    }, [adElRef])

    return (
        <Grid className={cx('p-2', br.bt, cl.br)} items="center">
            <div ref={adElRef} id="native-carbon"/>
        </Grid>
    )
}