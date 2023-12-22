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
    <div className="flex items-center w-full mb-12">
      <button onClick={handleMobileToggle} className={`px-[18px] py[0px] rounded-tl-[4px] rounded-bl-[4px] ${isMobileView ? 'purpleBackground' : 'whiteBackground'}`}><img src="https://img.icons8.com/sf-regular/40/iphone-x.png" alt='Icon' /></button>
      <button onClick={handleMobileToggle} className={`px-[18px] py[0px] rounded-tr-[4px] rounded-br-[4px] ${isMobileView ? 'whiteBackground' : 'purpleBackground'}`}><img src="https://img.icons8.com/material-outlined/40/imac.png" alt='Icon' /></button>
    </div>
  );
}

export default ToggleComponent;
