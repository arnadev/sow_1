import React from 'react'
import TermsButton from './TermsButton'

const TermsTop = ({language, contentText}) => {
  return (
    <div id='content'>
        <div id='terms-text'>
          {contentText?.termsText}
        </div>

        <div>
            <TermsButton language={language} contentText={contentText} />
        </div>

        <div id='terms'>
          <div dangerouslySetInnerHTML={{ __html: contentText?.text }} /> {/*it is ok because html has no connection to user input, only server-side*/}
        </div>

        <div id='lower-terms-button-container'>
            <TermsButton language={language} contentText={contentText} />
        </div>
    </div>
  )
}

export default TermsTop