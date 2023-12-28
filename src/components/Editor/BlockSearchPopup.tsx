
import { Editor } from 'grapesjs';
import React, { useMemo, useState } from 'react';
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
} from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";
import "../../styles/persuasiveblock.css";
import ConnectedCustomHierarchicalMenu from './CustomHierarchicalMenu';
import categoryStyleMapping from './categoryStyleMapping'
import { useAppEditorStore } from '../store/appEditorStore';

interface BlockSearchPopupProps {
  grapeJSEditor: Editor | null | undefined
}

const initialUIState = {
  blocks_list_new: {
    hierarchicalMenu: {
      'heirarchy.category': ['Brand Connect'],
    },
  },
};

const BlockSearchPopup: React.FC<BlockSearchPopupProps> = ({ grapeJSEditor }) => {
  const [selectedCategory, setSelectedCategory] = useState<any>(categoryStyleMapping['Brand Connect'])
  const [categorySelected, setCategorySelected] = useState(false)
  const { selectedComponent, setSelectedComponent } = useAppEditorStore();
    const searchClient = useMemo(() => {
      return algoliasearch(
        "IO4B9E5Q45",
        "a089c7660ed4fcbb8529e4a12ce2836c"
      )
    }, []);

    // @ts-ignore
    function Hit({ hit }: any) {
        const hitImage = `/editor/blocks/${hit.id}.png`;
        let categoryInfo: any;
        const category = hit?.heirarchy?.category
        categoryInfo = categoryStyleMapping[category|| 'Logic'] 
        // setSelectedCategory(categoryInfo)

        function add(hit:any) {
          if(selectedComponent) {
            const selectedComponentId = selectedComponent.getId();
            const selected = grapeJSEditor!.getWrapper()!.find(`#${selectedComponentId}`)[0];
            const parent = selected.parent();
            const index = parent?.components().indexOf(selected) || 0
            parent?.components().add({type: hit.id}, { at: index + 1 });
            setSelectedComponent(null)
          } else {
            grapeJSEditor?.addComponents({ type: hit.id}); 
          }

          grapeJSEditor?.Modal.close();
        }

        return (
        <article className="articleSection">
          <div className={`imageContainer ${categoryInfo?.style ? categoryInfo.style : '#BBFBE5'}`}>
          {/* <div className={`imageContainer bg-[#BBFBE5]`}> */}
            <img className='image' src={hitImage} />

          </div>
            <div className="description">
              <h1>{hit.description}</h1>
              <button className='w-[67px] h-[27px]' onClick={() =>  add(hit) }>ADD</button>
            </div>
        </article>
        );
    }

    return (
        <div id="customModalPopup">
          <p className='text-black absolute top-[-43px] right-[307px] text-[16px] subTitle'>Explore a range of content blocks designed by UX & Marketing Experts for maximum persuasion</p>
        <InstantSearch searchClient={searchClient} indexName="blocks_list_new" initialUiState={initialUIState}>
          <div className="leftSection">            
              <div className="searchSection">
                <SearchBox placeholder='Search'/>
              </div>
              <div className="refinementList text-black bg-white">
                <ConnectedCustomHierarchicalMenu 
                  attributes={[
                    "heirarchy.category",
                    "heirarchy.subcategory"
                  ]}
                  sortBy={['name']}
                  setSelectedCategory={setSelectedCategory}
                  />
              </div>            
          </div>
          <div className="rightSection">
            <div className="topSection">
              <div>{
                selectedCategory?.category ?
                <div className='flex gap-[16px] items-center'>
                  <img className='w-[26px] h-[26px]' src={`/editor/${selectedCategory.icon}`} alt={selectedCategory.alt} />
                  <h2 className={`${selectedCategory.style} bg-white`}>{selectedCategory.category} Blocks</h2>
                </div> : 
                <>
                  <h2 className={`text-[#11EC7D]`}>Select Blocks</h2>
                </>
                }</div>
                <p>
                    {
                      selectedCategory?.category ? 
                      selectedCategory.description :
                      'Here you will see the description for your selected block'
                    }
                </p>
            </div>
            <div className="bottomSection">              
                <Hits hitComponent={Hit} />              
            </div>
          </div>
          </InstantSearch>
        </div>
    );
};

export default BlockSearchPopup;
