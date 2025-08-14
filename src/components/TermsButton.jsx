import React from 'react'
import {contentText} from '../../index'

const TermsButton = ({language}) => {
  return (
    <button id='terms-button' onClick={() => {window.close('', '_self', '');history.back()}}>{contentText[language].buttonText}</button>
  )
}

export default TermsButton