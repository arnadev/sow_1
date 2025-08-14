import React from 'react'
import {contentText} from '../../index'
import TermsButton
 from './TermsButton'
const TermsTop = ({language}) => {
  return (
    <div id='content'>
        <div id='terms-text'>
          {contentText[language].termsText}
        </div>

        <div>
            <TermsButton language={language} />
        </div>

        <div id='terms'>
          <div dangerouslySetInnerHTML={{ __html: contentText[language].text }} /> {/*it is ok because html has no connection to user input, only server-side*/}
        </div>

        <div id='lower-terms-button-container'>
            <TermsButton language={language} />
        </div>
    </div>
  )
}

export default TermsTop