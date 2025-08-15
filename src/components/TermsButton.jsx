import React from 'react'

const TermsButton = ({contentText}) => {
  return (
    <button id='terms-button' onClick={() => {window.close('', '_self', '');history.back()}}>{contentText?.buttonText}</button>
  )
}

export default TermsButton