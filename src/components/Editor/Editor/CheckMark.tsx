import React from 'react'

type Props = {}

const CheckMark = (props: Props) => {
  return (
    <div id="checkMarkContent" className='popupGifWrapper'>
        <p className='savePopupSubTitle'>Please wait while we stash your changes</p>
        <img className='giphy-style' src="/editor/completed.gif" />
    </div>
    )
}

export default CheckMark