import React from 'react';
import '../../styles/toggle.css'

function ToggleComponent({
    isMobileView,
    handleMobileToggle
}: {
    isMobileView: boolean,
    handleMobileToggle: () => void
}) {

  return (
    <div className="flex items-center justify-center w-full mb-12">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only toggleCta"
            checked={isMobileView}
            onChange={handleMobileToggle}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isMobileView ? 'transform translate-x-6' : ''
            }`}
          ></div>
        </div>
        <div className="ml-3 text-white-700 font-medium">
            Mobile View
        </div>
      </label>
    </div>
  );
}

export default ToggleComponent;
