import GrapesJSComponent from "./_components/grapejs";
import { useLocation } from 'react-router-dom';

const EditorPage = () => {
  //const location = useLocation();

  // Parse query parameters from the location search string
  //const searchParams = new URLSearchParams(location.search);

  // Access specific query parameters by name
  //const block_sequence:string = searchParams.get('block_sequence')||'';
  return (
    <div>
      <GrapesJSComponent />
    </div>
  );
};

export default EditorPage;
