const WebsiteBuilderHeader = () => {
  return (
    <div className="website-builder-header">
      <div className="website-builder-header-item">
        <div className="product-name">Product Name</div>
        <div className="actions">
          <p>Undo</p>
          <p>Redo</p>
        </div>
        <div className="views">
          <p>Desktop</p>
          <p>Mobile</p>
        </div>
        <div className="user-actions">
          <p>Preview</p>
          <button className="save">Save</button>
          <button className="publish">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilderHeader;
