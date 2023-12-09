
import { Editor } from 'grapesjs';
import React, { useState } from 'react';
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  HierarchicalMenu,
} from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";
import { useAppEditorStore } from '../store/appEditorStore';
import CustomRadioRefinementList from './CustomRefinementList';
import "../../styles/persuasiveblock.css";
// import "../../styles/previewblock.css";

interface BlockSearchPopupProps {
  grapeJSEditor: Editor | null | undefined
}

const categoryStyleMapping: any = {
  Trust: {
    style: 'trust',
    icon: 'shield.png',
    alt: 'Shield icon',
    category: "Trust",
    description: 'Helps you develop trust in your users, on your product’s authenticity & effectiveness'
  },
  Logic: {
    style: 'logic',
    icon: 'logic-brain.png',
    alt: 'Logic Brain  icon',
    category: "Logic",
    description: 'Helps you logically convey the strengths & advantages of your product'
  },
  'Brand Connect': {
    style: 'brand-connect',
    icon: 'brand-connect-heart.png',
    alt: 'Heart icon',
    category: "Brand Connect",
    description: 'Helps you to position your brand & establish a connect with your users'
  },
  Emotion: {
    style: 'emotion',
    icon: 'emotion-smiley.png',
    alt: 'Smiley icon',
    category: "Emotion",
    description: 'Helps you connect your product with the emotional needs of your users'
  },
  Urgency: {
    style: 'fomo',
    icon: 'fomo-fire.png',
    alt: 'Fire icon',
    category: "Urgency",
    description: 'Helps you to create a sense of urgency in your users to shop'
  },
  Value: {
    style: 'value',
    icon: 'value-discount.png',
    alt: 'Discount icon',
    category: "Value",
    description: 'Helps you create a high value perception of your product in the user’s eyes'
  },
  'First Impression': {
    style: 'first-impression',
    icon: 'first-impression-document.png',
    alt: 'Document icon',
    category: "First Impression",
    description: 'Helps you to create a powerful first impression'
  },
  'User Actions': {
    style: 'first-impression',
    icon: 'first-impression-document.png',
    alt: 'Document icon',
    category: "User Actions",
    description: 'Helps you to control user actions'
  },
}

const initialUIState = {
  blocks_list_new: {
    hierarchicalMenu: {
      'heirarchy.category': ['Logic'],
    },
  },
};

const BlockSearchPopup: React.FC<BlockSearchPopupProps> = ({ grapeJSEditor }) => {
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [categorySelected, setCategorySelected] = useState(false)
    const searchClient = algoliasearch(
        "IO4B9E5Q45",
        "a089c7660ed4fcbb8529e4a12ce2836c"
      );

    // @ts-ignore
    function Hit({ hit }: any) {
        const hitImage = `/editor/blocks/${hit.id}.png`;
        let categoryInfo: any;
        const category = hit?.heirarchy?.category
        categoryInfo = categoryStyleMapping[category|| 'Logic']
        setSelectedCategory(categoryInfo)

        function add(hit:any) {
          grapeJSEditor?.addComponents({ type: hit.id}); grapeJSEditor?.Modal.close();
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
          <p className='text-black absolute top-[78px] right-[307px] text-[16px] subTitle'>Explore a range of content blocks designed by UX & Marketing Experts for maximum persuasion</p>
        <InstantSearch searchClient={searchClient} indexName="blocks_list_new" initialUiState={initialUIState}>
          <div className="leftSection">            
              <div className="searchSection">
                <SearchBox />
              </div>
              <div className="refinementList text-black">
                {/* <RefinementList operator='or' attribute="category" /> */}
                {/* <CustomRadioRefinementList attribute="category" /> */}
                <HierarchicalMenu
                  attributes={[
                    "heirarchy.category",
                    "heirarchy.subcategory"
                  ]}
                  defaultValue={'Logic'}
                  defaultChecked={true}
                  // onClick={() => setCategorySelected(true)}
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
