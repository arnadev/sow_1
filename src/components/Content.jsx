import React from 'react'
import {contentText} from '../../index'

const TermsTop = ({language}) => {
  return (
    <div id='content'>
        <div id='terms-text'>
          {contentText[language].termsText}
        </div>

        <div>
            <button id='terms-button'>{contentText[language].buttonText}</button>
        </div>

        <div id='terms'>
          <div dangerouslySetInnerHTML={{ __html: contentText[language].text }} /> {/*it is ok because html has no connection to user input, only server-side*/}
        </div>

        <div id='lower-terms-button-container'>
            <button id='terms-button'>{contentText[language].buttonText}</button>
        </div>
    </div>
  )
}

export default TermsTop