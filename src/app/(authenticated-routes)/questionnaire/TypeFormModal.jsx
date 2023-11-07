import React from "react";
import { Popup, Embed } from "@typeform/embed-react";
import "../../../styles/questionnaire.scss"; // Import your custom CSS file

const TypeformModal = () => {
  return (
    <Popup
      trigger={<button>Open Typeform</button>} // Your trigger button
      position="right" // Set the desired position
    >
      {({ open }) => (
        <div className="custom-modal-content">
          <button onClick={open}>Open Typeform</button>
          <Embed url="https://form.typeform.com/to/KrKkFkVv" />
        </div>
      )}
    </Popup>
  );
};
export default TypeformModal;
