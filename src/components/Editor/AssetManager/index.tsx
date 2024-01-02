import { AssetsResultProps } from '@grapesjs/react';
import type { Asset } from 'grapesjs';
import { observer } from "mobx-react-lite";
import { useEffect, useState } from 'react';
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
import { UnsplashResponse } from '@/types/unsplashResponse';

export default observer(function AssetManager({ assets, select, close }: Omit<AssetsResultProps, 'Container' | 'open' | 'types'>) {
    const appEditorStore = useAppEditorStore();
    const [tid] = useTransitionEnd();
    const i18nStore = useI18nStore();
    const [searchValue, setSearchValue] = useState('');
    const [urlValue, setUrlValue] = useState('');
    const [items, setItems] = useState<UnsplashResponse[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [queryValue, setQueryValue] = useState('nature')
    const editor = appEditorStore.editor!;
    const { Assets  } = editor;

    const onSelect = (asset: UnsplashResponse) => {
        const addedAsset = Assets.add(asset.urls.regular);
        select(addedAsset);
        close();
    }

    const handleUrlAdd = (clb: () => void) => () => {
        if (urlValue) {
            const addedAsset = Assets.add(urlValue);
            select(addedAsset);
            clb();
            close();
        }
    };

    const searchHandler = async() => {
        if(!searchValue) {
            return
        }

        await fetchRequest(1, searchValue)
        setCurrentPage(1)
        setQueryValue(searchValue)
        setSearchValue('')
    }

    const handlePagination = async(change: number) => {
        const changedValue = currentPage === 1 && change === -1 ? 0 : currentPage + change
        if(changedValue > 0) {
            setCurrentPage(changedValue)
            await fetchRequest(changedValue, queryValue)
        }
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement> ) => {
        if(event.key === 'Enter') {
            searchHandler() 
        }
    }

    const fetchRequest = async (pageNo: number = 1, query: string = 'nature') => {
        const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=${pageNo}&query=${query}&client_id=${ACCESS_KEY}&per_page=16`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        setItems(result)
      };

    useEffect(() => {
        fetchRequest();
    },[])

    return (
        <Grid col space="m" className='px-[50px] py-[30px]'>
            <Grid items="center" space="m">
                <GridItem className="mr-auto flex gap-[10px]">
                    <input
                    className='border-2 rounded-[4px] text-black'
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={`${i18nStore.t('search')}...`}
                        onKeyDown={keyDownHandler}
                    />
                    <button onClick={searchHandler} className='bg-[#a78bfa] cursor-pointer px-[10px] py-[2px] h-[30px] my-auto rounded-[3px] text-white'>Search</button>
                </GridItem>
                <GridItem>
                    <Popover overlay title={false} buttonAs="span"
                        handler={<Button variant="pr" size="m2">{i18nStore.t('assetManager.addUrl')}</Button>}
                    >
                        {({ close }) => (
                            <Grid space="m">
                                <GridItem>
                                    <InputField type="url" className='text-black' size="s" value={urlValue} onChange={setUrlValue} placeholder={i18nStore.t('assetManager.inputPlh')}/>
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
                    !items?.length ?
                    <Grid justify="center">{ i18nStore.t('noItems') }</Grid>
                    :
                    <>
                    <VirtuosoGrid
                        key={tid}
                        data={items}
                        listClassName="grid grid-cols-4 gap-[40px] overflow-hidden"
                        itemContent={(i, asset: UnsplashResponse) => (
                            <AssetCard key={asset.id} asset={asset} onSelect={onSelect} />
                        )}
                    />
                    <div className='flex justify-end gap-[10px]'>
                        <button className='text-2xl font-semibold text-gray-500' onClick={() => handlePagination(-1)}>{'<'}</button>
                        <p className='text-2xl py-[4px] text-black mt-[2px]'>{currentPage}</p>
                        <button className='text-2xl font-semibold text-gray-500' onClick={() => handlePagination(+1)}>{'>'}</button>
                    </div>
                    </>
                }
            </Grid>
        </Grid>
    );
});
