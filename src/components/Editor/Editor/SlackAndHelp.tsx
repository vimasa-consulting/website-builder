import React, { Dispatch, SetStateAction } from 'react'
import Grid from '../Grid'

type Props = {
  setShowSlackAndHelp: Dispatch<SetStateAction<boolean>>
}

const SlackAndHelp = ({setShowSlackAndHelp} : Props) => {
  const handlePopupClose = () => {
    setShowSlackAndHelp(false)
  }

  return (
    <Grid className="flex absolute gap-[12px] right-[122px] top-[75px] z-[100] rounded-[8px] bg-white shadow-custom py-[13px] px-[22px]">
      <a className="slack-button" href="https://slack.com" target="_blank"><p>Join our </p><img className='w-[80px] mt-[-3px]' src="/slack.png"></img></a>
      <a className="create-account-button" href="/" target="_blank"><p>Create Account</p></a>
      <a className='text-center bg-[#FEF4FF] py-[8px] px-[22px] rounded-[8px] text-[18px]' href="https://google.com" target="_blank">Get Help</a>    
      <button
        className="absolute top-0 right-[2px] text-gray-600 hover:text-gray-800 text-lg"
        onClick={handlePopupClose}
        >         
        ✖️
        </button>            
    </Grid>
  )
}

export default SlackAndHelp