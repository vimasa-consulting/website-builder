import { AiOutlineEye } from "react-icons/ai";
import {
  IoReturnUpBackOutline,
  IoReturnUpForwardOutline,
  IoDesktopOutline,
} from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
const WebsiteBuilderHeader = () => {
  return (
    <div className="website-builder-header">
      <div className="website-builder-header-item">
        <div className="product-name">Product Name</div>
        <div className="actions">
          <p>
            <IoReturnUpBackOutline />
            Undo
          </p>
          <p>
            Redo
            <IoReturnUpForwardOutline />
          </p>
        </div>
        <div className="views">
          <p>
            <IoDesktopOutline />
            Desktop
          </p>
          <p>
            <FaMobileAlt />
            Mobile
          </p>
        </div>
        <div className="user-actions">
          <p>
            <AiOutlineEye />
            Preview
          </p>
          <button className="save">Save</button>
          <button className="publish">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilderHeader;
