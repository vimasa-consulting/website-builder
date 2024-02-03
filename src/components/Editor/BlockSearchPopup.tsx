
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

function SubmitIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <g clip-path="url(#clip0_608_3069)">
      <path d="M9.375 9.375L13.125 13.125M6.25 10.625C3.83375 10.625 1.875 8.66625 1.875 6.25C1.875 3.83375 3.83375 1.875 6.25 1.875C8.66625 1.875 10.625 3.83375 10.625 6.25C10.625 8.66625 8.66625 10.625 6.25 10.625Z" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_608_3069">
      <rect width="15" height="15" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
}


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
        const hitImage = `/editor/blocks/${hit.id}.svg`;
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
    function menuSort(a:any, b:any) {
      var aCategory=a.path.split(">")[0].trim();
      var bCategory=b.path.split(">")[0].trim();
      var ordererdList=['First Impression', 'Logic', 'Emotion', 'Urgency', 'Value', 'Trust', 'Brand Connect', 'User Actions'];
      console.log(ordererdList.indexOf(aCategory),ordererdList.indexOf(bCategory));
      var first=ordererdList.indexOf(aCategory);
      var second=ordererdList.indexOf(bCategory);
      if(first==second) return 0;
      if(first>second) return 1;
      if(first<second) return -1;
      return 1;
    }

    return (
        <div id="customModalPopup">
          <p className='text-black absolute top-[-43px] right-[307px] text-[16px] subTitle'>Explore a range of content blocks designed by UX & Marketing Experts for maximum persuasion</p>
        <InstantSearch searchClient={searchClient} indexName="blocks_list_new" initialUiState={initialUIState}>
          <div className="leftSection">            
              <div className="searchSection">
                <SearchBox  placeholder='Search'  submitIconComponent={SubmitIcon}/>
              </div>
              <div className="refinementList text-black bg-white">
                <ConnectedCustomHierarchicalMenu 
                  attributes={[
                    "heirarchy.category",
                    "heirarchy.subcategory"
                  ]}
                  sortBy={menuSort}
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
