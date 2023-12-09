
import { Editor } from 'grapesjs';
import React from 'react';
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

const BlockSearchPopup: React.FC<BlockSearchPopupProps> = ({ grapeJSEditor }) => {  
    const searchClient = algoliasearch(
        "IO4B9E5Q45",
        "a089c7660ed4fcbb8529e4a12ce2836c"
      );

    // @ts-ignore
    function Hit({ hit }) {
        const hitImage = `/editor/blocks/${hit.id}.png`;
        function add(id:string) {
          grapeJSEditor?.addComponents({ type: id}); grapeJSEditor?.Modal.close();
        }
        return (
        <article className="articleSection">
            <img src={hitImage} width="240px" />
            <div className="description">
            <h1>{hit.description}</h1>
            <button onClick={() =>  add(hit.id) }>ADD</button>
            </div>
        </article>
        );
    }
    return (
        <div id="customModalPopup">
        <InstantSearch searchClient={searchClient} indexName="blocks_list_new">
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
                />
              </div>            
          </div>
          <div className="rightSection">
            <div className="topSection">
              <h2>Selected Blocks</h2>
              <p>
                Helps you develop trust in your users, on your product’s
                authenticity & effectiveness
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
