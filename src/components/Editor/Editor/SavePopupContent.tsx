import React from 'react'

type Props = {}

const SavePopupContent = (props: Props) => {
    return (
        <div id='savePopupContent' className="popupGifWrapper">
            <p className='savePopupSubTitle'>Please wait while we stash your changes</p>
            <div className="relative z-50">
                <iframe src="https://giphy.com/embed/TuZ8v66TzGeYJW23as" width="720" height="400" frameBorder="0" className="giphy-embed giphy-style">
                </iframe>
            </div>
        </div>
    )
}

export default SavePopupContent