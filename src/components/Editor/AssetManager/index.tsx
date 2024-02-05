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

enum ActiveTab {
    'URL',
    'IMAGE_UPLOAD',
    'UNSPLASH'
}

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
    const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.URL)
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

    const searchHandler = async(searchValue: string) => {
        if(!searchValue) {
            return
        }

        await fetchRequest(1, searchValue)
        setCurrentPage(1)
        setQueryValue(searchValue)
        // setSearchValue('')
    }

    const handlePagination = async(change: number) => {
        const changedValue = currentPage === 1 && change === -1 ? 0 : currentPage + change
        if(changedValue > 0) {
            setCurrentPage(changedValue)
            await fetchRequest(changedValue, queryValue)
        }
    }

    // const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement> ) => {
    //     if(event.key === 'Enter') {
    //         searchHandler() 
    //     }
    // }

    const fetchRequest = async (pageNo: number = 1, query: string = 'nature') => {
        const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=${pageNo}&query=${query}&client_id=${ACCESS_KEY}&per_page=16`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        setItems(result)
      };

      const handleUpload = async (ev: React.FormEvent<HTMLInputElement>) => {
        console.log('handleUpload called', ev)
        // @ts-ignore
        await Assets.FileUploader().uploadFile(ev.nativeEvent);
        const urlValue = assets[0].getSrc()
        const addedAsset = Assets.add(urlValue);
        select(addedAsset);
        close();
        (ev.target as any).value = ''
    }

    const changeHandler = (e: any) => {
        setSearchValue(e.target.value);
        searchHandler(e.target.value)
    }

    useEffect(() => {
        fetchRequest();

        return () => {
            const popup = document.querySelector('.gjs-mdl-dialog') as HTMLElement;
            if(popup?.style) {
                popup.style.overflow = 'scroll'
            }
        }
    },[])

    useEffect(() => {
        const popup = document.querySelector('.gjs-mdl-dialog') as HTMLElement;
        if(activeTab === ActiveTab.URL) {
            popup.style.overflow = 'hidden'
        } else {
            popup.style.overflow = 'scroll'
        }
    },[activeTab])

    return (
        // <Grid col space="m" className='px-[50px] py-[30px]'>
        //     <Grid items="center" space="m">
        //         <GridItem className="mr-auto flex gap-[10px]">
        //             <input
        //             className='border-2 rounded-[4px] text-black'
        //                 type="search"
        //                 value={searchValue}
        //                 onChange={(e) => setSearchValue(e.target.value)}
        //                 placeholder={`${i18nStore.t('search')}...`}
        //                 onKeyDown={keyDownHandler}
        //             />
        //             <button onClick={searchHandler} className='bg-[#a78bfa] cursor-pointer px-[10px] py-[2px] h-[30px] my-auto rounded-[3px] text-white'>Search</button>
        //         </GridItem>
        //         <GridItem>
        //             <UploadField accept="image/*" onChange={handleUpload} handleUpload={handleUpload}/>
        //         </GridItem>
        //         <GridItem>
        //             <Popover overlay title={false} buttonAs="span"
        //                 handler={<Button variant="pr" size="m2">{i18nStore.t('assetManager.addUrl')}</Button>}
        //             >
        //                 {({ close }) => (
        //                     <Grid space="m">
        //                         <GridItem>
        //                             <InputField type="url" className='text-black' size="s" value={urlValue} onChange={setUrlValue} placeholder={i18nStore.t('assetManager.inputPlh')}/>
        //                         </GridItem>
        //                         <GridItem>
        //                             <Button variant="pr" size="m2" onClick={handleUrlAdd(close)}>{i18nStore.t('add')}</Button>
        //                         </GridItem>
        //                     </Grid>
        //                 )}
        //             </Popover>
        //         </GridItem>
        //     </Grid>
        //     <Grid className={cx('h-[75vh]')} space="m" col nowrap>
        //         {
        //             !items?.length ?
        //             <Grid justify="center">{ i18nStore.t('noItems') }</Grid>
        //             :
        //             <>
        //             <VirtuosoGrid
        //                 key={tid}
        //                 data={items}
        //                 listClassName="grid grid-cols-4 gap-[40px] overflow-hidden"
        //                 itemContent={(i, asset: UnsplashResponse) => (
        //                     <AssetCard key={asset.id} asset={asset} onSelect={onSelect} />
        //                 )}
        //             />
        //             <div className='flex justify-end gap-[10px]'>
        //                 <button className='text-2xl font-semibold text-gray-500' onClick={() => handlePagination(-1)}>{'<'}</button>
        //                 <p className='text-2xl py-[4px] text-black mt-[2px]'>{currentPage}</p>
        //                 <button className='text-2xl font-semibold text-gray-500' onClick={() => handlePagination(+1)}>{'>'}</button>
        //             </div>
        //             </>
        //         }
        //     </Grid>
        // </Grid>
        <>
            <div className='flex row p-[25px] gap-[28px] text-[18px]'>
                <button className='border-none outline-none cursor-pointer' onClick={() => setActiveTab(ActiveTab.URL)}>
                    <p className={`${activeTab === ActiveTab.URL ? 'text-black' : 'text-[#808080]'}`}>From URL</p>
                </button>
                <button className='border-none outline-none cursor-pointer' onClick={() => setActiveTab(ActiveTab.IMAGE_UPLOAD)}>
                    <p className={`${activeTab === ActiveTab.IMAGE_UPLOAD ? 'text-black' : 'text-[#808080]'}`}>From Files</p>
                </button>
                <button className='border-none outline-none cursor-pointer' onClick={() => setActiveTab(ActiveTab.UNSPLASH)}>
                    <p className={`${activeTab === ActiveTab.UNSPLASH ? 'text-black' : 'text-[#808080]'}`}>From Unsplash</p>
                </button>
            </div>
            <hr/>
            {
                activeTab === ActiveTab.URL && (
                    <Grid className='absolute bottom-[25px] right-[590px]'>
                        <GridItem>
                            <Popover overlay title={false} buttonAs="span"
                                        handler={<Button className='px-[14px] py-[9px] text-white font-500 bg-[#c953f7]'>{i18nStore.t('assetManager.addUrl')}</Button>}
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
                )
            }
            {
                activeTab === ActiveTab.UNSPLASH && (
                    <Grid col space="m" className='px-[50px] py-[30px]'>
                         <Grid className='justify-end' space="m">
                             <GridItem className="mr-0 flex gap-[10px] search-box ">
                                <input
                                className='border-none bg-[#F6F9FE] rounded-[4px] text-black w-[245px] h-[39px] search-input' 
                                    type="text"
                                    value={searchValue}
                                    onChange={changeHandler}
                                    placeholder={`Search Images`}
                                    // onKeyDown={keyDownHandler}
                                />
                                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 15 15" fill="none">
                                    <g clipPath="url(#clip0_608_3069)">
                                    <path d="M9.375 9.375L13.125 13.125M6.25 10.625C3.83375 10.625 1.875 8.66625 1.875 6.25C1.875 3.83375 3.83375 1.875 6.25 1.875C8.66625 1.875 10.625 3.83375 10.625 6.25C10.625 8.66625 8.66625 10.625 6.25 10.625Z" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_608_3069">
                                    <rect width="15" height="15" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                {/* <button onClick={searchHandler} className='bg-[#a78bfa] cursor-pointer px-[10px] py-[2px] h-[30px] my-auto rounded-[3px] text-white'>Search</button> */}
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
                )
            }
            {
                activeTab === ActiveTab.IMAGE_UPLOAD && (
                    <div>
                       <UploadField accept="image/*" onChange={handleUpload} handleUpload={handleUpload}> 
                        <h4>Click here to upload images</h4>
                        <p>File size should be lesser than 4MB</p>
                        </UploadField>
                        {/* <Grid className={cx('h-[75vh]')} space="m" col nowrap>
                            {
                                !assets?.length ?
                                <Grid justify="center">{ i18nStore.t('noItems') }</Grid>
                                :
                                <>
                                <VirtuosoGrid
                                    key={tid}
                                    data={assets}
                                    listClassName="grid grid-cols-4 gap-[40px] overflow-hidden"
                                    itemContent={(i, asset: any) => (
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
                        </Grid> */}
                    </div>
                )
            }
        </>
    );
});
