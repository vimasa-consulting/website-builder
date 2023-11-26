import { AssetsResultProps } from '@grapesjs/react';
import type { Asset } from 'grapesjs';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useI18nStore } from '../../store/I18nStore';
import { useAppEditorStore, useTransitionEnd } from '../../store/appEditorStore';
import { includesSearch } from '../../utils';
import cx from '../../utils/makeCls';
import Button from '../Button';
import Grid from "../Grid";
import GridItem from '../GridItem';
import InputField from '../InputField';
import Popover from '../Popover';
import UploadField from '../UploadField';
import AssetCard from "./AssetCard";

export default observer(function AssetManager({ assets, select, close }: Omit<AssetsResultProps, 'Container' | 'open' | 'types'>) {
    const appEditorStore = useAppEditorStore();
    const [tid] = useTransitionEnd();
    const i18nStore = useI18nStore();
    const [searchValue, setSearchValue] = useState('');
    const [urlValue, setUrlValue] = useState('');
    const [items, setItems] = useState(assets);
    const editor = appEditorStore.editor!;
    const { Assets  } = editor;

    const filteredAssets = items.filter((asset) => {
        if (
            searchValue &&
            !includesSearch(asset.getSrc(), searchValue) &&
            !includesSearch(asset.get('name' as any), searchValue)
        ) {
          return false;
        }
        return true;
      });

    const onRemove = (asset: Asset) => {
        setItems(assets.filter(a => a.getSrc() !== asset.getSrc()));
        Assets.remove(asset);
    };
    const onSelect = (asset: Asset) => {
        select(asset);
        close();
    }

    const handleUpload = async (ev: React.FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        Assets.FileUploader().uploadFile(ev.nativeEvent);
    }

    const handleUrlAdd = (clb: () => void) => () => {
        if (urlValue) {
            Assets.add(urlValue);
            clb();
        }
    };

    return (
        <Grid col space="m">
            <Grid items="center" space="m">
                <GridItem className="mr-auto">
                    <InputField
                        size="s"
                        type="search"
                        value={searchValue}
                        onInput={setSearchValue}
                        placeholder={`${i18nStore.t('search')}...`}
                    />
                </GridItem>
                <GridItem>
                    <UploadField accept="image/*" onChange={handleUpload}/>
                </GridItem>
                <GridItem>
                    <Popover overlay title={false} buttonAs="span"
                        handler={<Button variant="pr" size="m2">{i18nStore.t('assetManager.addUrl')}</Button>}
                    >
                        {({ close }) => (
                            <Grid space="m">
                                <GridItem>
                                    <InputField type="url" size="s" value={urlValue} onChange={setUrlValue} placeholder={i18nStore.t('assetManager.inputPlh')}/>
                                </GridItem>
                                <GridItem>
                                    <Button variant="pr" size="m2" onClick={handleUrlAdd(close)}>{i18nStore.t('add')}</Button>
                                </GridItem>
                            </Grid>
                        )}
                    </Popover>
                </GridItem>
            </Grid>
            <Grid className={cx('h-[75vh]')} space="m" col nowrap>
                {
                    !filteredAssets.length ?
                    <Grid justify="center">{ i18nStore.t('noItems') }</Grid>
                    :
                    <VirtuosoGrid
                        key={tid}
                        data={filteredAssets}
                        listClassName="grid grid-cols-4 gap-2 pr-2"
                        itemContent={(i, asset: any) => (
                            <AssetCard key={asset.getSrc()} asset={asset} onSelect={onSelect} onRemove={onRemove}/>
                        )}
                    />
                }
            </Grid>
        </Grid>
    );
});
